import React from "react";
import { Table, Button } from "semantic-ui-react";

const RoutineExerciseSet = ({ set, index, handleReps, reps, handleDelete }) => {
  return (
    <Table.Row key={index}>
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>
        <input type="text" value={reps} name={set} onChange={handleReps} />
        <button
          className="small negative floated right"
          onClick={() => handleDelete(index)}
        >
          <i className="minus icon" />
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default RoutineExerciseSet;
