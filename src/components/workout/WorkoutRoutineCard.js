import React from "react";

const WorkoutRoutineCard = ({ routine, handleClick }) => {
  const handleButton = () => {
    handleClick(routine);
  };
  const exercises = routine.exercises.map((exercise, index) => {
    return (
      <li key={index}>
        <p>{exercise.name}</p>
      </li>
    );
  });
  console.log(exercises);
  return (
    <div>
      <h3>{routine.title}</h3>
      <h4>Exercises: </h4>
      <ul>{exercises}</ul>
      <button onClick={handleButton}>Select</button>
    </div>
  );
};

export default WorkoutRoutineCard;
