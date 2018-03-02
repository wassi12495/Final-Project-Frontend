import React from "react";
import { Table } from "semantic-ui-react";

const CurrentWorkoutExerciseSet = ({
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
        <input type="text" name={set} value={measure} onChange={handleChange} />
      </Table.Cell>
      <Table.Cell>
        <div className="ui input">
          {measure === "N/a" ? null : (
            <input name={set} type="text" onChange={handleMeasureInput} />
          )}
        </div>
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

export default CurrentWorkoutExerciseSet;
