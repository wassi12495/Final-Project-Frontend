import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";

const ExercisesList = ({ match, exercises }) => {
  console.log("Exercise List", exercises);
  const seedExerciseCards = exercises.seed_exercises.map((e, index) => {
    return <ExerciseCard exercise={e} key={index} />;
  });
  const userExerciseCards = exercises.user_exercises.map((e, index) => {
    return <ExerciseCard exercise={e} key={index} />;
  });

  return (
    <div>
      <Link to={`${match.url}/new`}>Create a New Exercise</Link>
      <h1>Seeded Exercise List</h1>
      <div>{seedExerciseCards}</div>
      <h1> Custom Exercise List</h1>
      <div>{userExerciseCards}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  exercises: state.exercises
});

export default connect(mapStateToProps, null)(ExercisesList);
