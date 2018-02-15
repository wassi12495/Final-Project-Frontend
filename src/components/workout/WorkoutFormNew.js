import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Message, Loader, Modal, Button, Card } from "semantic-ui-react";
import WorkoutRoutineCard from "./WorkoutRoutineCard";

class WorkoutFormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: {},
      modal: false
    };
  }

  componentDidMount() {
    this.props.getRoutines();
  }

  onClose = () => {
    this.setState({
      modal: false
    });
  };
  onOpen = () => {
    this.setState({
      modal: true
    });
  };
  handleSelectWorkout = routine => {
    const initCurrWorkout = {
      routine_id: routine.id
    };
    this.props.postCurrentWorkout(initCurrWorkout, this.props.history);
  };

  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const customRoutine = {
      title: "Custom Routine",
      workouts: [],
      exercises: []
    };

    const routines = this.props.routines.map((routine, index) => {
      return (
        <WorkoutRoutineCard
          routine={routine}
          handleClick={this.handleSelectWorkout}
          key={index}
        />
      );
    });
    const { error, errorMessages } = this.props;
    return (
      <Modal
        trigger={<Button onClick={this.onOpen}>New Workout</Button>}
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>New Workout</Modal.Header>
        <Modal.Content>
          {error ? (
            <Message
              error
              header="Failed To Create Exercise!"
              list={errorMessages}
            />
          ) : null}
          <Card.Group>
            <WorkoutRoutineCard
              routine={customRoutine}
              handleClick={this.handleSelectWorkout}
            />

            {routines}
          </Card.Group>
        </Modal.Content>
      </Modal>
    );
  }

  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = ({ routines, currentWorkout }) => {
  return {
    routines: routines.routines,
    currentWorkout: currentWorkout,
    error: currentWorkout.error,
    errorMessages: currentWorkout.errorMessages
  };
};
export default connect(mapStateToProps, actions)(WorkoutFormNew);
