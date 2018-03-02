import React from "react";
import { Table } from "semantic-ui-react";

const RoutineExerciseSet = ({
  set,
  index,
  measure,
  handleReps,
  handleDelete
}) => {
  return (
    <Table.Row>
      <Table.Cell>{set}</Table.Cell>
      <Table.Cell>
        <input type="text" value={measure} name={set} onChange={handleReps} />
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
