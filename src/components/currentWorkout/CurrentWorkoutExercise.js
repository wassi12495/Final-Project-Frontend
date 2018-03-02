import React, { Component } from "react";
import { Table, Button, Card, Icon } from "semantic-ui-react";
import CurrentWorkoutExerciseSet from "./CurrentWorkoutExerciseSet";

class CurrentWorkoutExercise extends Component {
  componentWillMount = () => {
    const { exercise, index } = this.props;
    this.setState({
      name: exercise.name,
      description: exercise.description,
      sets: exercise.sets,
      measureInput: exercise.measure_input,
      index
    });
  };

  componentWillReceiveProps(nextProps) {
    const { exercise } = nextProps;
    this.setState({
      sets: exercise.sets,
      measureInput: exercise.measure_input
    });
  }

  addSet = () => {
    const { measureInput, sets, index } = this.state;
    const { exercise, update } = this.props;
    const newSets = sets + 1;
    const newE = Object.assign({}, exercise, {
      measure_input: [...measureInput, 0],
      sets: newSets
    });
    update(newE, index);
  };

  handleMeasureInput = (input, i) => {
    const { exercise, update } = this.props;
    const { measureInput, index } = this.state;

    const newM = [
      ...measureInput.slice(0, i),
      input,
      ...measureInput.slice(i + 1)
    ];
    const newE = Object.assign({}, exercise, {
      measure_input: newM
    });
    debugger;
    // this.props.handleChangeMeasure(e, exercise);
  };
  handleRepsInput = e => {
    // this.props.handleChangeReps(e, exercise);
  };
  handleDeleteRow = e => {
    // this.props.handleDeleteSet(e, exercise);
  };

  renderSetRows() {
    const { measureInput } = this.state;
    return measureInput.map((m, i) => {
      return (
        <CurrentWorkoutExerciseSet
          index={i}
          key={i}
          set={i + 1}
          measure={m}
          handleMeasureInput={this.handleMeasureInput}
          handleDelete={this.handleDeleteRow}
        />
      );
    });
  }

  render() {
    const { exercise } = this.props;
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{exercise.name}</Card.Header>
          <Card.Description>
            <Table collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="2">
                    {exercise.name}
                  </Table.HeaderCell>
                  <Table.HeaderCell colSpan="2">
                    <Button
                      negative
                      onClick={() => this.props.handleRemoveExercise(exercise)}
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
                      onClick={this.addSet}
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.renderSetRows()}</Table.Body>
            </Table>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default CurrentWorkoutExercise;
