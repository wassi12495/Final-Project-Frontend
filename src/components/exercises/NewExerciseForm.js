import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {
  Message,
  // Loader,
  Modal,
  Dropdown,
  // Card,
  Form
} from "semantic-ui-react";

class NewExerciseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
      name: "",
      description: "",
      exerciseCategory: "",
      modal: false
    };
  }

  componentDidMount = () => {
    this.props.getExerciseCategories();
    if (this.props.open) {
      this.setState({
        modal: true
      });
    }
  };

  onClose = () => {
    this.setState({
      modal: false
    });
  };
  onOpen = () => {
    this.setState({
      modal: true
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOptionChange = e => {
    this.setState({
      exerciseCategory: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, description, exerciseCategory } = this.state;
    const exercise_category_id = parseInt(exerciseCategory, 10);
    console.log("New Exercise Submit", name, description, exercise_category_id);
    const data = { name, description, exercise_category_id };
    this.setState({
      modal: false
    });
    this.props.addExercise(data, this.props.history);
  };

  renderModal() {
    const { exerciseCategories, error, errorMessages } = this.props;
    const { name, description, exerciseCategory } = this.state;
    const categories = exerciseCategories.map(c => {
      return (
        <option value={c.id} key={c.id}>
          {c.name}
        </option>
      );
    });

    return (
      <Modal
        trigger={
          <Dropdown.Item onClick={this.onOpen}>New Exercise</Dropdown.Item>
        }
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>New Exercise</Modal.Header>
        <Modal.Content>
          {error ? (
            <Message
              error
              header="Failed To Create Exercise!"
              list={errorMessages}
            />
          ) : null}

          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Name: </label>
              <input
                type="text"
                value={name}
                onChange={this.handleChange}
                name="name"
              />
            </Form.Field>
            <Form.Field>
              <label>Description: </label>
              <input
                type="text"
                value={description}
                onChange={this.handleChange}
                name="description"
              />
            </Form.Field>
            <Form.Field>
              <label>Exercise Category: </label>
              <select
                value={exerciseCategory.name}
                onChange={this.handleOptionChange}
              >
                <option value="">Pick one...</option>
                {categories}
              </select>
            </Form.Field>

            <Form.Button positive type="submit">
              Submit
            </Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
  render() {
    return this.props.loggedIn ? this.renderModal() : null;
  }
}

const mapStateToProps = ({ auth, exerciseCategories, exercises }) => ({
  currentUser: auth.currentUser,
  loggedIn: !!auth.currentUser.id,
  exerciseCategories: exerciseCategories,
  error: exercises.error,
  errorMessages: exercises.errorMessages
});

export default connect(mapStateToProps, actions)(NewExerciseForm);
