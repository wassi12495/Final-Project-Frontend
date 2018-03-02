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
    console.log(e.target.value);
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

  handleDeleteExercise = exercise => {
    const index = this.state.exercises.findIndex(e => e.id === exercise.id);
    this.props.removeExerciseFromCurrentWorkout(exercise, index);
  };

  update = (exercise, index) => {
    const { exercises } = this.props;
    const newExercises = [
      ...exercises.slice(0, index),
      exercise,
      ...exercises.slice(index + 1)
    ];
    this.props.updateCurrentWorkoutExercises(newExercises);
  };

  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { exercises, title } = this.props;
    const exerciseCards = exercises.map((exercise, index) => {
      return (
        <CurrentWorkoutExercise
          exercise={exercise}
          index={index}
          key={index}
          update={this.update}
          handleDelete={this.handleDeleteExercise}
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
            <Input type="text" value={title} onChange={this.handleTitleInput} />
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
