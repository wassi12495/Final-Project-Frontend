import React from "react";
import { Header, Segment } from "semantic-ui-react";

const ExerciseShow = ({ exercise }) => {
  console.log(exercise);

  return !!exercise ? (
    <Segment.Group>
      <Segment>{exercise.name}</Segment>
      <Segment.Group>
        <Segment>Description: {exercise.description}</Segment>
        <Segment>Category: {exercise.exercise_category}</Segment>
        <Segment>
          Measurements:
          <p>
            |{exercise.columns.map((c, i) => {
              return ` ${c} |`;
            })}
          </p>
        </Segment>
      </Segment.Group>
    </Segment.Group>
  ) : (
    <Header as="h1">Pick an Exercise</Header>
  );
};

export default ExerciseShow;
