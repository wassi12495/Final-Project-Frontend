import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import RoutineCard from "./RoutineCard";

const RoutinesList = props => {
  const { routines } = props;
  const myRoutines = routines.map((r, index) => {
    return (
      <div key={index}>
        <Link to={`${props.match.url}/${r.id}`}>
          <RoutineCard routine={r} key={index} />
        </Link>
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
  currentUser: state.auth.currentUser,
  routines: state.auth.currentUser.routines
});
export default withRouter(connect(mapStateToProps, null)(RoutinesList));
