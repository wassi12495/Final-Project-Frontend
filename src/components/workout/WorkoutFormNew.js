import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { adapter } from "../../services";
import { Message } from "semantic-ui-react";
import WorkoutRoutineCard from "./WorkoutRoutineCard";

class WorkoutFormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: {}
    };
  }

  componentDidMount() {
    this.props.getRoutines();
  }

  handleSelectWorkout = routine => {
    const initCurrWorkout = {
      routine_id: routine.id
    };
    this.props.postCurrentWorkout(initCurrWorkout, this.props.history);
    // adapter.workouts.initializeWorkout(initCurrWorkout).then(res => {
    //   if (res.error) {
    //     alert(res.error);
    //     this.props.history.push(`${this.props.match.url}`);
    //   } else {
    //     this.props.setCurrentWorkout(res, this.props.history);
    //     this.props.history.push(`/current_workout`);
    //   }
    // });
  };

  render() {
    const customRoutine = {
      title: "Custom Routine",
      workouts: [],
      exercises: []
    };

    const routines = this.props.routines.map((routine, index) => {
      return (
        <div key={index}>
          <WorkoutRoutineCard
            routine={routine}
            handleClick={this.handleSelectWorkout}
          />
        </div>
      );
    });
    const { error, errorMessages } = this.props;
    return (
      <div>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <h1>New Workout</h1>
        {error ? (
          <Message
            error
            header="Failed To Create Exercise!"
            list={errorMessages}
          />
        ) : null}
        <div>
          <WorkoutRoutineCard
            routine={customRoutine}
            handleClick={this.handleSelectWorkout}
          />
        </div>
        <div>{routines}</div>
      </div>
    );
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
