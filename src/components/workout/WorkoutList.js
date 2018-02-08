import React from "react";
import { connect } from "react-redux";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = props => {
  const workouts = props.workouts.map((workout, index) => {
    return <WorkoutCard workout={workout} key={index} />;
  });
  return (
    <div>
      <h1>Previous Workouts</h1>
      <div>{workouts}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  workouts: state.workouts
});

export default connect(mapStateToProps)(WorkoutList);
