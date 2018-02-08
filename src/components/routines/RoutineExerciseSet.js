import React from "react";
import { Table } from "semantic-ui-react";

const RoutineExerciseSet = ({ set, index, handleReps, reps }) => {
  return (
    <Table.Row key={index}>
      <Table.Cell>{set}</Table.Cell>
      <Table.Cell>
        <input type="text" value={reps} name={set} onChange={handleReps} />
      </Table.Cell>
    </Table.Row>
  );
};

export default RoutineExerciseSet;
