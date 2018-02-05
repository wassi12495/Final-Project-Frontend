import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import WorkoutRoutineCard from "./WorkoutRoutineCard";

class WorkoutFormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: {}
    };
  }

  handleSelectWorkout = routine => {
    console.log("Selected Routine", routine);
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
    return (
      <div>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <h1>New Workout</h1>
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

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    routines: state.auth.currentUser.routines
  };
};
export default connect(mapStateToProps, actions)(WorkoutFormNew);
