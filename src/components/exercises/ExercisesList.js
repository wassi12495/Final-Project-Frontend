import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExercisesList = ({ match }) => {
  return (
    <div>
      <h1>Exercises List</h1>
      <div>
        <Link to={`${match.url}/new`}>Create a New Exercise</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, null)(ExercisesList);
