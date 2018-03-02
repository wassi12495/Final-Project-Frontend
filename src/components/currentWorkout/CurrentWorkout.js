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
      const { exercises, title } = this.props;
      this.setState({
        title,
        exercises
      });
    } else {
      this.props.history.goBack();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { title, exercises } = this.props;
    this.setState({
      exercises,
      title
    });
  }

  handleFinishWorkout = () => {
    const { currentWorkout } = this.props;
    this.props.finishWorkout(this.props.history, currentWorkout);
  };

  handleDeleteWorkout = () => {
    const { id } = this.props;
    this.props.deleteCurrentWorkout(id, this.props.history);
  };

  handleTitleInput = e => {
    this.props.updateCurrentWorkoutTitle(e.target.value);
  };

  handleAddExercise = e => {
    const { id } = this.props;
    const exercise = Object.assign({}, e, {
      sets: 1,
      measure: [10]
    });
    const data = { exercise, id };
    this.props.addExerciseToCurrentWorkout(data);
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

  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { title } = this.state;
    const { exercises } = this.props;
    const exerciseCards = exercises.map((exercise, index) => {
      return (
        <CurrentWorkoutExercise
          exercise={exercise}
          index={index}
          key={index}
          handleClick={this.handleAddSet}
          handleChangeMeasure={this.handleChangeMeasure}
          handleChangeReps={this.handleChangeReps}
          handleDeleteSet={this.handleDeleteSet}
          handleRemoveExercise={this.handleRemoveExercise}
        />
      );
    });
    return (
      <Container>
        <Segment textAlign="center">
          <Header>
            <Button floated="left" negative onClick={this.handleDeleteWorkout}>
              Delete Workout
            </Button>
            <Button floated="right" primary onClick={this.handleFinishWorkout}>
              Finish Workout
            </Button>
            <Input value={this.state.title} onChange={this.handleTitleInput} />
            <h1>{title}</h1>
            <AddExercise handleSelection={this.handleAddExercise} />
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
  title: currentWorkout.title,
  inProgress: currentWorkout.inProgress,
  currentWorkout
});
export default connect(mapStateToProps, actions)(CurrentWorkout);
