import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {
  Button,
  Container,
  Loader,
  Segment,
  Header,
  Input
} from "semantic-ui-react";
import CurrentWorkoutExercise from "./CurrentWorkoutExercise";
import AddExercise from "../exercises/AddExercise";

class CurrentWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      title: ""
    };
  }
  componentWillMount() {
    if (this.props.inProgress) {
      const { exercises, routine } = this.props;
      const title = routine.title;
      this.setState({
        title,
        exercises: exercises
      });
    } else {
      this.props.history.goBack();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      exercises: nextProps.exercises
    });
  }

  handleChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleAddSet = exercise => {
    const reps = [...exercise.reps];
    const measure_input = [...exercise.measure_input];
    reps.push("0");
    measure_input.push("0");

    const newE = Object.assign({}, exercise, {
      sets: exercise.sets + 1,
      reps,
      measure_input
    });
    const { exercises } = this.props;
    const i = exercises.findIndex(e => exercise.id === e.id);
    this.props.updateCurrentWorkoutExercise(newE, i);
    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, i),
        newE,
        ...this.state.exercises.slice(i + 1)
      ]
    });
  };

  handleDeleteSet = (e, exercise) => {
    const reps = [...exercise.reps.slice(0, e), ...exercise.reps.slice(e + 1)];
    const measure_input = [
      ...exercise.measure_input.slice(0, e),
      ...exercise.measure_input.slice(e + 1)
    ];
    const sets = exercise.sets - 1;
    const newE = Object.assign({}, exercise, {
      sets,
      reps,
      measure_input
    });
    const { exercises } = this.props;
    const i = exercises.findIndex(e => exercise.id === e.id);
    this.props.updateCurrentWorkoutExercise(newE, i);

    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, i),
        newE,
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
    this.props.updateCurrentWorkoutExercise(newE, i);

    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, i),
        newE,
        ...this.state.exercises.slice(i + 1)
      ]
    });
  };

  handleChangeReps = (e, exercise) => {
    const newE = Object.assign({}, exercise, {
      reps: [
        ...exercise.reps.slice(0, e.target.name),
        e.target.value,
        ...exercise.reps.slice(e.target.name + 1)
      ]
    });

    const i = this.state.exercises.findIndex(ex => exercise.id === ex.id);
    this.props.updateCurrentWorkoutExercise(newE, i);

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
    const { id } = this.props;

    const params = { update, index, id };
    this.props.addExerciseToCurrentWorkout(params);
  };

  handleRemoveExercise = exercise => {
    const index = this.state.exercises.findIndex(e => e.id === exercise.id);

    this.props.removeExerciseFromCurrentWorkout(exercise, index);
    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, index),
        ...this.state.exercises.slice(index + 1)
      ]
    });
  };

  handleEndWorkout = () => {
    const { id, exercises, routine } = this.props;
    const { title } = this.state;
    const params = { id, exercises, routine_id: routine.id, title };
    this.props.finishWorkout(params, this.props.history);
  };

  handleDeleteWorkout = () => {
    const { id } = this.props;
    this.props.deleteCurrentWorkout(id, this.props.history);
  };

  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { exercises } = this.props;
    const exerciseCards = exercises.map((exercise, index) => {
      return (
        <div key={index}>
          <CurrentWorkoutExercise
            exercise={exercise}
            handleClick={this.handleAddSet}
            handleChangeMeasure={this.handleChangeMeasure}
            handleChangeReps={this.handleChangeReps}
            handleDeleteSet={this.handleDeleteSet}
            handleRemoveExercise={this.handleRemoveExercise}
          />
        </div>
      );
    });
    const { title } = this.state;
    return (
      <Container>
        <Segment textAlign="center">
          <Header>
            <Button floated="left" negative onClick={this.handleDeleteWorkout}>
              Delete Workout
            </Button>
            <Button floated="right" primary onClick={this.handleEndWorkout}>
              Finish Workout
            </Button>
            <Input value={this.state.title} onChange={this.handleChangeTitle} />
            <h1>{title}</h1>
            <AddExercise handleSelection={this.handleSelection} />
          </Header>
          <div className="ui  cards">{exerciseCards}</div>
        </Segment>
      </Container>
    );
  }
  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = ({ currentWorkout }) => ({
  error: currentWorkout.error,
  errorMessages: currentWorkout.errorMessages,
  loading: currentWorkout.loading,
  id: currentWorkout.id,
  exercises: currentWorkout.exercises,
  routine: currentWorkout.routine,
  inProgress: currentWorkout.inProgress
});
export default connect(mapStateToProps, actions)(CurrentWorkout);
