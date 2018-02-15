import React from "react";
import { Card, Button } from "semantic-ui-react";
const WorkoutRoutineCard = ({ routine, handleClick, match }) => {
  const handleButton = () => {
    handleClick(routine);
  };
  const exercises = routine.exercises.map((exercise, index) => {
    return (
      <p key={index}>
        {exercise.name} x{exercise.sets}
      </p>
    );
  });
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{routine.title}</Card.Header>
        <Card.Description>
          <h4>Exercises: </h4>
          <ul>{exercises}</ul>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button positive onClick={handleButton}>
          Begin Workout
        </Button>
      </Card.Content>
    </Card>
  );
};

export default WorkoutRoutineCard;
