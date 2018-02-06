import React from "react";

const RoutineExerciseSet = ({ exercise }) => {
  console.log(exercise.sets);
  let sets = [];
  const set = i => {
    return (
      <div key={i}>
        <p>"{i}"</p>
        <input type="text" />
      </div>
    );
  };
  for (let i = 1; i <= exercise.sets; i++) {
    sets.push(set(i));
  }
  return <div>{sets}</div>;
};

export default RoutineExerciseSet;
