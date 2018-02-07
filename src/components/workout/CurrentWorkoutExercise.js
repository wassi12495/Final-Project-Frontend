import React from "react";

const CurrentWorkoutExercise = ({ exercise, key }) => {
  const rows = [];
  for (let i = 0; i < exercise.sets; i++) {
    rows.push(
      <div key={i}>
        <div />
        <p>Set {i + 1}</p>
        <p>{exercise.reps[i]}</p>
      </div>
    );
  }
  return (
    <div key={key}>
      <h3>{exercise.name}</h3>
      <p>Sets</p>
      <p>Reps</p>
      <p>{exercise.measure}</p>
      {rows}
    </div>
  );
};

export default CurrentWorkoutExercise;
