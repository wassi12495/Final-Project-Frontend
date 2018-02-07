import React from "react";
import { Link } from "react-router-dom";
const WorkoutRoutineCard = ({ routine, handleClick, match }) => {
  const handleButton = () => {
    handleClick(routine);
  };
  const exercises = routine.exercises.map((exercise, index) => {
    return (
      <div key={index}>
        <p>
          {exercise.name} x{exercise.sets}
        </p>
      </div>
    );
  });
  console.log(routine);
  return (
    <div>
      <h3>{routine.title}</h3>
      <h4>Exercises: </h4>
      <ul>{exercises}</ul>
      <button onClick={handleButton}>
        Select
        {/* <Link to={`/profile/workouts/current_workout`}>Select</Link> */}
      </button>
    </div>
  );
};

export default WorkoutRoutineCard;
