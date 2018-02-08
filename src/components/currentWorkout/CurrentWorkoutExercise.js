import React from "react";
import { Table, Button, Input } from "semantic-ui-react";

const CurrentWorkoutExercise = ({
  exercise,
  handleClick,
  handleChangeMeasure,
  handleChangeReps
}) => {
  const handleMeasureInput = e => {
    handleChangeMeasure(e, exercise);
  };
  const handleRepsInput = e => {
    handleChangeReps(e, exercise);
  };
  const rows = [];
  for (let i = 0; i < exercise.sets; i++) {
    rows.push(
      <Table.Row key={i}>
        <Table.Cell>Set {i + 1}</Table.Cell>
        <Table.Cell>
          <Input
            type="text"
            name={i}
            value={exercise.reps[i]}
            onChange={handleRepsInput}
          />
        </Table.Cell>
        <Table.Cell>
          <Input name={i} type="text" onChange={handleMeasureInput} />
        </Table.Cell>
      </Table.Row>
    );
  }
  return (
    <Table collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">{exercise.name}</Table.HeaderCell>
          <Table.HeaderCell>
            <Button onClick={() => handleClick(exercise)}>Add Set</Button>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Sets</Table.HeaderCell>
          <Table.HeaderCell>Reps</Table.HeaderCell>
          <Table.HeaderCell>{exercise.measure}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table>
  );
};

export default CurrentWorkoutExercise;
