import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RoutineCard from "./RoutineCard";

const RoutinesList = ({ match, routines }) => {
  const myRoutines = routines.map((r, index) => {
    return (
      <div key={index}>
        <Link to={`${match.url}/${r.id}`}>
          <RoutineCard routine={r} key={index} />
        </Link>
      </div>
    );
  });
  return (
    <div>
      <h2>Your Routines</h2>
      {myRoutines}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  routines: state.routines
});
export default connect(mapStateToProps, null)(RoutinesList);
