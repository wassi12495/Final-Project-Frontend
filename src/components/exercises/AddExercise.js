import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Modal, Table, Button, Loader } from "semantic-ui-react";

class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  componentDidMount() {
    this.props.getExercises();
  }

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

  handleAdd = e => {
    this.props.handleSelection(e);
  };

  renderLoading() {
    return <Loader />;
  }

  renderPage() {
    const { exercises } = this.props;
    const exercisesToAdd = exercises.map((exercise, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>{exercise.name}</Table.Cell>
          <Table.Cell>{exercise.exercise_category.name}</Table.Cell>
          <Table.Cell>{exercise.description}</Table.Cell>
          <Table.Cell>
            <Button onClick={() => this.handleAdd(exercise)}>Add</Button>
          </Table.Cell>
        </Table.Row>
      );
    });

    return (
      <Modal
        trigger={<Button onClick={this.onOpen}>Add Exercises</Button>}
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>Add Exercises</Modal.Header>
        <Modal.Content>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <h4>Exercise</h4>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <h4>Category</h4>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <h4>Description</h4>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{exercisesToAdd}</Table.Body>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.onClose}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = ({ exercises, exerciseCategories }) => ({
  exercises: exercises.exercises,
  error: exercises.error,
  errorMessages: exercises.errorMessages,
  loading: exercises.loading,
  exerciseCategories: exerciseCategories
});

export default connect(mapStateToProps, actions)(AddExercise);
