import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AddExercise from "../exercises/AddExercise";
import NewRoutineExercise from "./NewRoutineExercise";
import {
  Container,
  Button,
  Header,
  Input,
  Message,
  Card
} from "semantic-ui-react";

class NewRoutineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      exercises: [],
      user_id: this.props.currentUser.id
    };
  }

  componentDidMount() {
    this.props.beginNewRoutine(this.state);
  }

  handleSubmit = () => {
    const data = {
      routine: this.props.currentRoutine
    };
    this.props.addRoutine(this.props.history, data);
  };

  handleClearRoutine = () => {
    this.props.deleteNewRoutine(this.props.history);
  };

  handleTitleInput = e => {
    this.props.updateNewRoutineTitle(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelection = e => {
    const exercise = Object.assign({}, e, {
      sets: 1,
      measure: [10]
    });
    console.log(exercise);
    debugger;
    const index = this.state.exercises.length;
    const data = { exercise };
    this.props.addExerciseToNewRoutine(data);
    this.setState({
      exercises: [...this.state.exercises, exercise]
    });
  };

  handleRemoveExercise = (exercise, index) => {
    this.props.deleteNewRoutineExercise(index);
    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, index),
        ...this.state.exercises.slice(index + 1)
      ]
    });
  };
  update = () => {
    console.log("this.Update");
  };

  updateState = state => {
    console.log("this.updateState");
    const exercise = this.state.exercises[state.index];
    exercise.sets = state.sets;
    exercise.amt = state.amt;
    this.setState({
      exercises: [
        ...this.state.exercises.slice(0, state.index),
        exercise,
        ...this.state.exercises.slice(state.index + 1)
      ]
    });
  };

  render() {
    const { title } = this.state;
    const { error, errorMessages } = this.props;
    const exercises = this.state.exercises.map((exercise, index) => {
      return (
        <NewRoutineExercise
          exercise={exercise}
          index={index}
          key={index}
          updateState={this.updateState}
          handleRemove={this.handleRemoveExercise}
        />
      );
    });
    return (
      <Container>
        <Header>
          <Header.Content>
            <h1>Build A Routine</h1>
            <Button positive onClick={this.handleSubmit}>
              Save Routine
            </Button>
            <AddExercise handleSelection={this.handleSelection} />
            <Button negative onClick={this.handleClearRoutine}>
              Delete Routine
            </Button>
          </Header.Content>
        </Header>
        <div>
          <div>
            {error ? (
              <Message
                error
                header="Failed To Create Exercise!"
                list={errorMessages}
              />
            ) : null}
            <h3>Routine Title:</h3>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={this.handleTitleInput}
            />

            <Card.Group>{exercises}</Card.Group>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth, newRoutine }) => ({
  currentUser: auth.currentUser,
  exercises: newRoutine.exercises,
  title: newRoutine.title,
  loading: newRoutine.loading,
  error: newRoutine.error,
  errorMessages: newRoutine.errorMessages
});

export default connect(mapStateToProps, actions)(NewRoutineForm);
