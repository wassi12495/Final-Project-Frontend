import React from "react";
import { connect } from "react-redux";
import RoutineCard from "./RoutineCard";

const RoutinesList = props => {
  const { routines } = props.currentUser;
  const myRoutines = routines.map((r, index) => {
    return (
      <div key={index}>
        <p>{r.title}</p>
        <RoutineCard routine={r} key={index} />
      </div>
    );
  });
  console.log("RoutinesList - routines", routines);
  return (
    <div>
      <h2>Your Routines</h2>
      {myRoutines}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});
export default connect(mapStateToProps, null)(RoutinesList);
