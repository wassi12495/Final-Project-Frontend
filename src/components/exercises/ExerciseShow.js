import React from "react";
import { Header, Segment, Table } from "semantic-ui-react";

const ExerciseShow = ({ exercise }) => {
  console.log(exercise);

  return !!exercise ? (
    <Segment.Group>
      <Segment>{exercise.name}</Segment>
      <Segment.Group>
        <Segment>Description: {exercise.description}</Segment>
        <Segment>Category: {exercise.exercise_category}</Segment>
        <Segment>
          Measurements:{" "}
          <Table collapsing textAlign="center">
            <Table.Header>
              <Table.Row>
                {exercise.columns.map((c, i) => {
                  return <Table.HeaderCell key={i}>{c}</Table.HeaderCell>;
                })}
              </Table.Row>
            </Table.Header>
          </Table>
        </Segment>
      </Segment.Group>
    </Segment.Group>
  ) : (
    <Header as="h1">Pick an Exercise</Header>
  );
};

export default ExerciseShow;
