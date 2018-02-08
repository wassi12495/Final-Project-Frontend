import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import CurrentWorkoutExercise from "./CurrentWorkoutExercise";

class CurrentWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }
  componentDidMount() {
    if (!!this.props.currentWorkout) {
      this.setState({
        exercises: this.props.currentWorkout.exercises
      });
    } else {
      debugger;
      alert("You do not currently have an active workout!");
      this.props.history.goBack();
    }
  }

  handleAddSet = exercise => {
    Object.assign({}, exercise, {
      sets: exercise.sets++
    });
    const i = this.state.exercises.findIndex(e => exercise.id === e.id);
    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, i),
        exercise,
        ...this.state.exercises.slice(i + 1)
      ]
    });
  };

  handleChangeMeasure = (e, exercise) => {
    const newE = Object.assign({}, exercise, {
      measure_input: [
        ...exercise.measure_input.slice(0, e.target.name),
        e.target.value,
        ...exercise.measure_input.slice(e.target.name + 1)
      ]
    });
    const i = this.state.exercises.findIndex(ex => exercise.id === ex.id);
    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, i),
        newE,
        ...this.state.exercises.slice(i + 1)
      ]
    });
  };
  render() {
    const exerciseCards = this.state.exercises.map((exercise, index) => {
      return (
        <div key={index}>
          <CurrentWorkoutExercise
            exercise={exercise}
            handleClick={this.handleAddSet}
            handleChange={this.handleChangeMeasure}
          />
        </div>
      );
    });
    return (
      <div>
        <h1>Current Workout Page</h1>
        {exerciseCards}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentWorkout: state.currentWorkout
});
export default connect(mapStateToProps, actions)(CurrentWorkout);
