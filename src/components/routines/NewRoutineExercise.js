import React from "react";
import RoutineExerciseSet from "./RoutineExerciseSet";

const NewRoutineExercise = ({ exercise, key, addSet }) => {
  console.log(exercise);

  return (
    <div key={key}>
      <span>
        <h4>
          {exercise.name} (x{exercise.sets})
        </h4>
        <h4>{exercise.exercise_category.measure_of_duration}</h4>
        <button onClick={() => addSet(exercise)}>Add set</button>{" "}
      </span>
      <RoutineExerciseSet exercise={exercise} />
    </div>
  );
};

export default NewRoutineExercise;
