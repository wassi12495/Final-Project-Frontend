import React, { Component } from "react";
import { Header, Table, Card, Segment } from "semantic-ui-react";
// import RoutineTableEntry from "./RoutineTableEntry";

class RoutineShow extends Component {
  renderRows = exercise => {
    const rows = [];
    for (let i = 0; i < exercise.sets; i++) {
      rows.push(
        <Table.Row key={i}>
          <Table.Cell>Set {i + 1}</Table.Cell>
          <Table.Cell>
            {exercise.reps.length === 0 ? <label>N/A</label> : exercise.reps[i]}
          </Table.Cell>
        </Table.Row>
      );
    }
    return rows;
  };
  renderExercises = () => {
    const { routine } = this.props;
    console.log(routine);
    const exercises = routine.exercises.map((e, i) => {
      return (
        <Card key={i}>
          <Table key={i}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2">{e.name}</Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Sets</Table.HeaderCell>
                <Table.HeaderCell>Reps</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.renderRows(e)}</Table.Body>
          </Table>
        </Card>
      );
    });
    return exercises;
  };

  render() {
    const { routine } = this.props;
    return !!routine ? (
      <Segment>
        <Header>{routine.title}</Header>

        <Card.Group>{this.renderExercises()}</Card.Group>
      </Segment>
    ) : (
      <Header as="h1">Pick a Routine</Header>
    );
  }
}

export default RoutineShow;
