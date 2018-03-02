import React from "react";
import { Table } from "semantic-ui-react";

const CurrentWorkoutExerciseSet = ({
  set,
  index,
  measureInput,
  measure,
  reps,
  handleMeasureInput,
  handleRepsInput,
  handleDelete
}) => {
  const handleChangeMeasureInput = e => {
    const input = e.target.value;
    handleMeasureInput(input, index);
  };
  const handleChangeRepsInput = e => {
    const input = e.target.value;
    handleRepsInput(input, index);
  };
  return (
    <Table.Row>
      <Table.Cell>{set}</Table.Cell>
      <Table.Cell>
        <input
          type="text"
          name={set}
          value={reps}
          onChange={handleChangeRepsInput}
        />
      </Table.Cell>
      <Table.Cell>
        <div className="ui input">
          {measure === "N/a" ? null : (
            <input
              name={set}
              type="text"
              value={measureInput}
              onChange={handleChangeMeasureInput}
            />
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
