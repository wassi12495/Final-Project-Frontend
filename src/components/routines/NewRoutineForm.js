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

  componentWillReceiveProps(nextProps) {
    const { exercises, title } = nextProps;
    this.setState({
      exercises,
      title
    });
  }

  handleSubmit = () => {
    const { newRoutine } = this.props;
    this.props.saveNewRoutine(this.props.history, newRoutine);
  };

  handleClearRoutine = () => {
    this.props.deleteNewRoutine(this.props.history);
  };

  handleTitleInput = e => {
    this.props.updateNewRoutineTitle(e.target.value);
  };

  handleAddExercise = e => {
    const exercise = Object.assign({}, e, {
      sets: 1,
      measure: [10]
    });
    const data = { exercise };
    this.props.addExerciseToNewRoutine(data);
  };

  handleDeleteExercise = index => {
    this.props.deleteNewRoutineExercise(index);
  };

  update = (exercise, index) => {
    const { exercises } = this.props;
    const newExercises = [
      ...exercises.slice(0, index),
      exercise,
      ...exercises.slice(index + 1)
    ];

    this.props.updateNewRoutineExercises(newExercises);
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
          update={this.update}
          handleDelete={this.handleDeleteExercise}
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
            <AddExercise handleSelection={this.handleAddExercise} />
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
  errorMessages: newRoutine.errorMessages,
  newRoutine
});

export default connect(mapStateToProps, actions)(NewRoutineForm);
