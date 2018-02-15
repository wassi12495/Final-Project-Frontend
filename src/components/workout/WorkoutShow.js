import React, { Component } from "react";
import { Header, Table } from "semantic-ui-react";

class WorkoutShow extends Component {
  renderRows = exercise => {
    const rows = [];
    for (let i = 0; i < exercise.sets; i++) {
      rows.push(
        <Table.Row key={i}>
          <Table.Cell>Set {i + 1}</Table.Cell>
          <Table.Cell>
            {exercise.reps.length === 0 ? <label>N/A</label> : exercise.reps[i]}
          </Table.Cell>
          <Table.Cell />
        </Table.Row>
      );
    }
    return rows;
  };
  renderExercises = () => {
    const { workout } = this.props;
    console.log(workout);
    const exercises = workout.exercises.map((e, i) => {
      return (
        <Table collapsing key={i}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">{e.name}</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Sets</Table.HeaderCell>
              <Table.HeaderCell>Reps</Table.HeaderCell>
              <Table.HeaderCell>{e.measure}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRows(e)}</Table.Body>
        </Table>
      );
    });
    return exercises;
  };
  render() {
    const { workout } = this.props;
    return !!workout ? (
      this.renderExercises()
    ) : (
      <Header as="h1">Pick a Workout</Header>
    );
  }
}

export default WorkoutShow;
