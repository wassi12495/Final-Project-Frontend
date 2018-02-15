import React from "react";
import { Header, Segment } from "semantic-ui-react";

const ExerciseShow = ({ exercise }) => {
  console.log(exercise);

  return !!exercise ? (
    <Segment.Group>
      <Segment>{exercise.name}</Segment>
      <Segment.Group>
        <Segment>Description: {exercise.description}</Segment>
        <Segment>Category: {exercise.exercise_category.name}</Segment>
        <Segment>
          Measurements:{" "}
          {`${exercise.exercise_category.subject_of_measurement} ${
            exercise.exercise_category.unit
          }`}
        </Segment>
      </Segment.Group>
    </Segment.Group>
  ) : (
    <Header as="h1">Pick a Workout</Header>
  );
};

export default ExerciseShow;
