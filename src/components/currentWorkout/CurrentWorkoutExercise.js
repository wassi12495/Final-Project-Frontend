import React from "react";
import { Table, Button, Card, Icon } from "semantic-ui-react";

const CurrentWorkoutExercise = ({
  exercise,
  handleClick,
  handleChangeMeasure,
  handleChangeReps,
  handleDeleteSet,
  handleRemoveExercise
}) => {
  const handleMeasureInput = e => {
    handleChangeMeasure(e, exercise);
  };
  const handleRepsInput = e => {
    handleChangeReps(e, exercise);
  };
  const handleDeleteRow = e => {
    handleDeleteSet(e, exercise);
  };

  const rows = [];
  for (let i = 0; i < exercise.sets; i++) {
    rows.push(
      <Table.Row key={i}>
        <Table.Cell>Set {i + 1}</Table.Cell>
        <Table.Cell>
          <div className="ui input">
            {exercise.reps.length === 0 ? (
              <label>N/A</label>
            ) : (
              <input
                type="text"
                name={i}
                value={exercise.reps[i]}
                onChange={handleRepsInput}
              />
            )}
          </div>
        </Table.Cell>
        <Table.Cell>
          <div className="ui input">
            {exercise.measure === "N/a" ? null : (
              <input name={i} type="text" onChange={handleMeasureInput} />
            )}
          </div>
          <button
            className="small negative floated right"
            onClick={() => handleDeleteRow(i)}
          >
            <i className="minus icon" />
          </button>
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{exercise.name}</Card.Header>
        <Card.Description>
          <Table collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2">{exercise.name}</Table.HeaderCell>
                <Table.HeaderCell>
                  <Button
                    negative
                    onClick={() => handleRemoveExercise(exercise)}
                  >
                    Remove Exercise
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Sets</Table.HeaderCell>
                <Table.HeaderCell>Reps</Table.HeaderCell>
                <Table.HeaderCell>{exercise.measure}</Table.HeaderCell>
                <Table.HeaderCell>
                  <Icon
                    circular
                    inverted
                    name="plus"
                    color="green"
                    onClick={() => handleClick(exercise)}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{rows}</Table.Body>
          </Table>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CurrentWorkoutExercise;
