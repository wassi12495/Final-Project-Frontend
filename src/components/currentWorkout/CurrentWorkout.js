import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { adapter } from "../../services";
import { Button, Container } from "semantic-ui-react";
import CurrentWorkoutExercise from "./CurrentWorkoutExercise";
import AddExercise from "../exercises/AddExercise";

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
        currentWorkout_id: this.props.currentWorkout.id,
        routine_id: this.props.currentWorkout.routine.id,
        title: this.props.currentWorkout.routine.title,
        exercises: this.props.currentWorkout.exercises
      });
    } else {
      this.props.history.goBack();
    }
  }

  handleAddSet = exercise => {
    Object.assign({}, exercise, {
      sets: exercise.sets++,
      reps: exercise.reps.push(0)
    });
    console.log(exercise);
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

  handleChangeReps = (e, exercise) => {
    console.log(exercise.reps);

    const newE = Object.assign({}, exercise, {
      reps: [
        ...exercise.reps.slice(0, e.target.name),
        e.target.value,
        ...exercise.reps.slice(e.target.name + 1)
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
  handleSelection = exercise => {
    const update = Object.assign({}, exercise, {
      sets: [{ set: 1, reps: 10 }],
      amt: 1
    });
    const index = this.state.exercises.length;
    const current_workout_id = this.state.currentWorkout_id;
    const params = { update, index, current_workout_id };
    adapter.workouts.addExerciseToCurrentWorkout(params).then(res => {
      this.props.addExerciseToCurrentWorkout(res);
    });

    this.setState({
      exercises: [...this.state.exercises, update]
    });
  };

  handleEndWorkout = () => {
    console.log("End Workout", this.state);
    console.log("Current Workout", this.props.currentWorkout);
    // this.props.finishWorkout(this.state);
    this.props.history.push("/profile/workouts");
  };
  render() {
    console.log(this.state);
    const exerciseCards = this.state.exercises.map((exercise, index) => {
      return (
        <div key={index}>
          <CurrentWorkoutExercise
            exercise={exercise}
            handleClick={this.handleAddSet}
            handleChangeMeasure={this.handleChangeMeasure}
            handleChangeReps={this.handleChangeReps}
          />
        </div>
      );
    });
    return (
      <Container>
        <h1>Current Workout Page</h1>
        <Button positive onClick={this.handleEndWorkout}>
          End Workout
        </Button>
        <AddExercise handleSelection={this.handleSelection} />

        {exerciseCards}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentWorkout: state.currentWorkout
});
export default connect(mapStateToProps, actions)(CurrentWorkout);
