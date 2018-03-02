import React from "react";
import { Table } from "semantic-ui-react";

const RoutineExerciseSet = ({
  set,
  index,
  measure,
  handleMeasureInput,
  handleDelete
}) => {
  const handleChange = e => {
    const input = e.target.value;
    handleMeasureInput(input, index);
  };

  return (
    <Table.Row>
      <Table.Cell>{set}</Table.Cell>
      <Table.Cell>
        <input type="text" value={measure} name={set} onChange={handleChange} />
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
