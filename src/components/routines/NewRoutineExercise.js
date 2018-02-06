import React from "react";
import RoutineExerciseSet from "./RoutineExerciseSet";

const NewRoutineExercise = ({ exercise, key, addSet }) => {
  console.log(exercise);

  return (
    <div key={key}>
      <table>
        <tbody>
          <tr>
            <th>
              <h4>
                {exercise.name} (x{exercise.sets})
              </h4>
            </th>
            <th>
              <h4>{exercise.exercise_category.measure_of_duration}</h4>
            </th>
          </tr>
        </tbody>
      </table>
      <button onClick={() => addSet(exercise)}>Add set</button>
    </div>
  );
};

export default NewRoutineExercise;
