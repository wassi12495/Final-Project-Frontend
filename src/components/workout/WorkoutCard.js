import React from "react";

const WorkoutCard = ({ workout }) => {
  console.log("Workout Card", workout);

  return (
    <div>
      <h3>{workout.title}</h3>
      <p>{workout.time_of_workout}</p>
    </div>
  );
};

export default WorkoutCard;
