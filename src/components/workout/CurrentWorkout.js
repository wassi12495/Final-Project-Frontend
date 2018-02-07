import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const CurrentWorkout = props => {
  console.log("Current Workout", props.currentWorkout);
  return (
    <div>
      <h1>Current Workout Page</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  currentWorkout: state.currentWorkout
});
export default connect(mapStateToProps, actions)(CurrentWorkout);
