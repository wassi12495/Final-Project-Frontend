import React from "react";
import { connect } from "react-redux";

const ExerciseCard = ({ exercise, exerciseCategories }) => {
  const exercise_category = exerciseCategories.find(ec => {
    return exercise.exercise_category_id === ec.id;
  });
  return (
    <div>
      <h4>{exercise.name}</h4>
      <p> Description: {exercise.description}</p>
      <p> Category: {exercise_category.name}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  exerciseCategories: state.exerciseCategories
});
export default connect(mapStateToProps)(ExerciseCard);
