import React from "react";
import { Card } from "semantic-ui-react";

const WorkoutCard = ({ workout }) => {
  console.log(workout);
  return (
    <Card>
      <h3>{workout.title}</h3>
      <p>
        {workout.time_of_workout
          .split(" ")
          .slice(0, 2)
          .join(" ")}
      </p>
    </Card>
  );
};

export default WorkoutCard;
