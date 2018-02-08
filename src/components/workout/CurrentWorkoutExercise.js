import React from "react";

const CurrentWorkoutExercise = ({
  exercise,
  key,
  handleClick,
  handleChange
}) => {
  const handleInput = e => {
    handleChange(e, exercise);
  };
  const rows = [];
  for (let i = 0; i < exercise.sets; i++) {
    rows.push(
      <div key={i}>
        <p>Set {i + 1}</p>
        <p>{exercise.reps[i]}</p>
        <input name={i} type="text" onChange={handleInput} />
      </div>
    );
  }
  return (
    <div>
      <h3>{exercise.name}</h3>
      <p>Sets</p>
      <p>Reps</p>
      <p>{exercise.measure}</p>
      {rows}
      <button onClick={() => handleClick(exercise)}>Add Set</button>
    </div>
  );
};

export default CurrentWorkoutExercise;
