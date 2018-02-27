import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Message, Loader, Modal, Dropdown, Card } from "semantic-ui-react";
import WorkoutRoutineCard from "./WorkoutRoutineCard";

class WorkoutFormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: {},
      modal: false
    };
  }

  componentWillMount() {
    this.props.getRoutines();
    if (this.props.open) {
      this.setState({
        modal: true
      });
    }
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

  renderLoading = () => {
    return <Loader />;
  };
  renderPage = () => {
    // const customRoutine = {
    //   routine: {
    //     title: "Custom Routine",
    //     exercises: []
    //   },
    //   workouts: [],
    //   exercises: []
    // };
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
        trigger={
          <Dropdown.Item onClick={this.onOpen}>New Workout</Dropdown.Item>
        }
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>New Workout</Modal.Header>
        <Modal.Content>
          {error ? (
            <Message
              error
              header="Failed To Create Workout!"
              list={errorMessages}
            />
          ) : null}
          <Card.Group>
            {/* <WorkoutRoutineCard
              routine={customRoutine}
              handleClick={this.handleSelectWorkout}
            /> */}

            {routines}
          </Card.Group>
        </Modal.Content>
      </Modal>
    );
  };

  render() {
    return !!this.props.routines ? this.renderPage() : null;
  }
}

const mapStateToProps = ({ routines, currentWorkout, auth }) => {
  return {
    currentUser: auth.currentUser,
    routines: routines.routines,
    loading: routines.loading,
    currentWorkout: currentWorkout,
    error: currentWorkout.error,
    errorMessages: currentWorkout.errorMessages
  };
};
export default connect(mapStateToProps, actions)(WorkoutFormNew);
