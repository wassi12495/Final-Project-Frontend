import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NewExerciseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
      name: "",
      description: "",
      exerciseCategory: ""
    };
  }

  componentDidMount = () => {
    this.props.getExerciseCategories();
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
    this.props.addExercise(data, this.props.history);
    // this.props.history.push("/exercises");
  };

  render() {
    const { exerciseCategories } = this.props;
    const { name, description, exerciseCategory } = this.state;
    const categories = exerciseCategories.map(c => {
      return (
        <option value={c.id} key={c.id}>
          {c.name}
        </option>
      );
    });
    return (
      <div>
        <h1>New Exercise Form</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
            <label>Description: </label>
            <input
              type="text"
              value={description}
              onChange={this.handleChange}
              name="description"
            />
            <label>Exercise Category: </label>
            <select
              value={exerciseCategory.name}
              onChange={this.handleOptionChange}
            >
              <option value="">Pick one...</option>
              {categories}
            </select>

            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  exerciseCategories: state.exerciseCategories
});

export default connect(mapStateToProps, actions)(NewExerciseForm);
