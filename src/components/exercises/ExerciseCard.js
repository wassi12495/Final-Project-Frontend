import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

const ExerciseCard = ({ exercise, exerciseCategories, handleClick }) => {
  return (
    <Card onClick={() => handleClick(exercise)}>
      <h4>{exercise.name}</h4>
      <p> Category: {exercise.exercise_category}</p>
    </Card>
  );
};

const mapStateToProps = state => ({
  exerciseCategories: state.exerciseCategories
});
export default connect(mapStateToProps)(ExerciseCard);
