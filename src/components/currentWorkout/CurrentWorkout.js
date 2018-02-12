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
      const { currentWorkout, exercises } = this.props;
      this.setState({
        currentWorkout_id: currentWorkout.id,
        routine_id: currentWorkout.routine.id,
        title: currentWorkout.routine.title,
        exercises: currentWorkout.exercises
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
    this.props.addExerciseToCurrentWorkout(params);
    // adapter.workouts.addExerciseToCurrentWorkout(params).then(res => {
    //   this.props.addExerciseToCurrentWorkout(res);
    //   this.setState({
    //     exercises: [...this.state.exercises, res]
    //   });
    // });
  };

  handleEndWorkout = () => {
    this.props.finishWorkout(this.state);
    this.props.history.push("/");
  };

  handleDeleteWorkout = () => {
    const id = this.props.currentWorkout.id;
    this.props.deleteCurrentWorkout(id, this.props.history);
  };
  render() {
    console.log("currentWorkout", this.state);
    console.log("currentWorkout props", this.props.currentWorkout);
    const { currentWorkout } = this.props;
    const exerciseCards = currentWorkout.exercises.map((exercise, index) => {
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
    const { title } = this.state;
    return (
      <Container>
        <h1>{title}</h1>
        <Button negative onClick={this.handleDeleteWorkout}>
          Delete Workout
        </Button>
        <AddExercise handleSelection={this.handleSelection} />
        <Button positive onClick={this.handleEndWorkout}>
          Finish Workout
        </Button>

        {exerciseCards}
      </Container>
    );
  }
}

const mapStateToProps = ({ currentWorkout }) => ({
  currentWorkout: currentWorkout.currentWorkout,
  error: currentWorkout.error,
  errorMessages: currentWorkout.errorMessages,
  loading: currentWorkout.loading
});
export default connect(mapStateToProps, actions)(CurrentWorkout);
