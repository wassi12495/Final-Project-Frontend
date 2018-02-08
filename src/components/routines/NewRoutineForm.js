import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { adapter } from "../../services";
import AddExercise from "../exercises/AddExercise";
import NewRoutineExercise from "./NewRoutineExercise";
import { Container, Button, Modal, Header, Input } from "semantic-ui-react";

class NewRoutineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
      title: "",
      exercises: [],
      user_id: this.props.currentUser.id
    };
  }

  componentDidMount() {
    this.props.setCurrentNewRoutine(this.state);
  }

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      routine: this.props.currentRoutine
    };
    adapter.routines.createRoutine(data).then(res => {
      if (res.error) {
        this.setState({
          error: true,
          errorMessage: `Routine title ${res.error.title[0]}`
        });
      } else {
        this.props.addRoutine();
        this.props.history.push("/profile");
      }
    });
  };

  handleChange = e => {
    this.props.updateCurrentRoutineTitle(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelection = exercise => {
    const update = Object.assign({}, exercise, {
      sets: [{ set: 1, reps: 10 }],
      amt: 1
    });
    const index = this.state.exercises.length;
    const params = { update, index };
    this.props.addExerciseToCurrentNewRoutine(params);
    this.setState({
      exercises: [...this.state.exercises, update]
    });
  };

  updateState = state => {
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
    const { title, error, errorMessage } = this.state;
    const exercises = this.state.exercises.map((exercise, index) => {
      return (
        <NewRoutineExercise
          exercise={exercise}
          index={index}
          key={index}
          updateState={this.updateState}
        />
      );
    });
    return (
      <Container>
        <button onClick={this.props.history.goBack}>Go Back</button>

        <Header>
          <Header.Content>
            <h1>Build A Routine</h1>
            <Button positive onClick={this.handleSubmit}>
              Save Routine
            </Button>
            <AddExercise handleSelection={this.handleSelection} />
            <Button negative onClick={this.props.history.goBack}>
              {" "}
              Go Back
            </Button>
          </Header.Content>
        </Header>
        <div>
          <div>
            {error ? <h4>{errorMessage}</h4> : null}
            <h3>Routine Title:</h3>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <div>
              <label>Exercises</label>
              {exercises}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  currentRoutine: state.currentRoutine
});

export default connect(mapStateToProps, actions)(NewRoutineForm);

// addSet = exercise => {
//   console.log("Add Set", exercise);
//   exercise.sets += 1;
//   const i = this.state.exercises.findIndex(e => e.id === exercise.id);
//   this.setState({
//     exercises: [
//       ...this.state.exercises.slice(0, i),
//       exercise,
//       ...this.state.exercises.slice(i + 1)
//     ]
//   });
// };
