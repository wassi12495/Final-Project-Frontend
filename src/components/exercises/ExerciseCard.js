import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

const ExerciseCard = ({ exercise, exerciseCategories, handleClick }) => {
  // const exercise_category = exerciseCategories.find(ec => {
  //   return exercise.exercise_category_id === ec.id;
  // });
  return (
    <Card onClick={() => handleClick(exercise)}>
      <h4>{exercise.name}</h4>
      <p> Description: {exercise.description}</p>
      <p> Category: {exercise.exercise_category.name}</p>
    </Card>
  );
};

const mapStateToProps = state => ({
  exerciseCategories: state.exerciseCategories
});
export default connect(mapStateToProps)(ExerciseCard);
