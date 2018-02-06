import React from "react";

const RoutineExerciseSet = ({ set, index, handleReps, reps, key }) => {
  return (
    <div key={key}>
      <p>{set}</p>
      <input type="text" value={reps} name={set} onChange={handleReps} />
    </div>
  );
};

export default RoutineExerciseSet;
