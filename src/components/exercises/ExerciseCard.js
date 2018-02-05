import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <div>
      <h4>{exercise.name}</h4>
      <p> Description: {exercise.description}</p>
      <p> Category: {exercise.exercise_category.name}</p>
    </div>
  );
};

export default ExerciseCard;
