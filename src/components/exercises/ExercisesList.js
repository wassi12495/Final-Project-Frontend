import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";

const ExercisesList = ({ match, exercises }) => {
  console.log("Exercise List", exercises);
  const exerciseCards = exercises.map((e, index) => {
    return <ExerciseCard exercise={e} key={index} />;
  });
  return (
    <div>
      <Link to={`${match.url}/new`}>Create a New Exercise</Link>
      <h1>Exercises List</h1>
      <div>{exerciseCards}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  exercises: state.exercises
});

export default connect(mapStateToProps, null)(ExercisesList);
