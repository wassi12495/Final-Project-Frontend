import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { adapter } from "../../services";
import AddExercise from "../exercises/AddExercise";
import NewRoutineExercise from "./NewRoutineExercise";
// import { Button, Modal } from "semantic-ui-react";

class NewRoutineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
      title: "",
      exercises: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const routine = {
      title: this.state.title,
      user_id: this.props.currentUser.id
    };
    adapter.routines.createRoutine(routine).then(res => {
      if (res.error) {
        this.setState({
          error: true,
          errorMessage: `Routine title ${res.error.title[0]}`
        });
      } else {
        // this.props.addRoutine(res);
        this.props.history.push("/profile");
      }
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelection = exercise => {
    console.log("Handle Selection", exercise);
    const e = Object.assign({}, exercise, {
      sets: 1,
      reps: []
    });
    this.setState({
      exercises: [...this.state.exercises, e]
    });
  };

  addSet = exercise => {
    console.log("Add Set", exercise);
    exercise.sets += 1;
    const i = this.state.exercises.findIndex(e => e.id === exercise.id);
    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, i),
        exercise,
        ...this.state.exercises.slice(i + 1)
      ]
    });
  };

  handleReps = e => {
    console.log(e.target.value);
  };

  render() {
    console.log("New Routine state", this.state.exercises);
    const { title, error, errorMessage } = this.state;
    const exercises = this.state.exercises.map(exercise => {
      return (
        <NewRoutineExercise
          exercise={exercise}
          key={exercise.id}
          addSet={this.addSet}
          handleReps={this.handleReps}
        />
      );
    });
    return (
      <div>
        <button onClick={this.props.history.goBack}>Go Back</button>

        <h1>New Routine</h1>
        <div>
          <div>
            {error ? <h4>{errorMessage}</h4> : null}
            <label>Routine Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <div>
              <label>Exercises</label>
              {exercises}
              <div>Add Exercise</div>

              <AddExercise handleSelection={this.handleSelection} />
            </div>

            <div>
              <button onClick={this.handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, actions)(NewRoutineForm);
