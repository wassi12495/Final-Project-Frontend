import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class WorkoutFormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: {}
    };
  }

  handleCustomWorkout = e => {
    console.log(e.target.value);
  };

  render() {
    console.log("New Workout props", this.props);
    return (
      <div>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <h1>New Workout</h1>
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
