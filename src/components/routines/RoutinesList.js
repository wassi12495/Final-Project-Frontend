import React from "react";
import { connect } from "react-redux";

const RoutinesList = props => {
  const { routines } = props.currentUser;
  const myRoutines = routines.map((r, index) => {
    return (
      <div key={index}>
        <p>{r.title}</p>
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
