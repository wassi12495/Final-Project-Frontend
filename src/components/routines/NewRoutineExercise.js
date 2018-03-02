import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Table, Card } from "semantic-ui-react";
import RoutineExerciseSet from "./RoutineExerciseSet";

class NewRoutineExercise extends Component {
  componentWillMount = () => {
    const { exercise, index } = this.props;
    console.log("New Routine Exercise", exercise);
    this.setState({
      name: exercise.name,
      description: exercise.description,
      sets: exercise.sets,
      measure: exercise.measure,
      index
    });
  };

  componentWillReceiveProps(nextProps) {
    const { exercise } = nextProps;
    this.setState({
      sets: exercise.sets,
      measure: exercise.measure
    });
    // const { sets, amt, index } = this.state;
    // const update = { sets, amt };
    // const params = { update, index };
    // this.props.updateNewRoutineExercises(params);
    // this.props.updateCurrentNewRoutine(params);
  }
  addSet = () => {
    this.setState({
      sets: [
        ...this.state.sets,
        {
          set: this.state.amt + 1,
          reps: 10
        }
      ],
      amt: this.state.amt + 1
    });
  };

  handleReps = e => {
    const num = e.target.name;
    const set = {
      set: parseInt(`${num}`, 10),
      reps: e.target.value
    };
    const sets = [
      ...this.state.sets.slice(0, num - 1),
      set,
      ...this.state.sets.slice(num)
    ];

    this.setState({
      sets
    });
  };

  handleDeleteRow = row => {
    const { measure, sets, index } = this.state;
    const { exercise, update } = this.props;
    const newSets = sets - 1;
    const newE = Object.assign({}, exercise, {
      measure: [...measure.slice(0, row), ...measure.slice(row + 1)],
      sets: newSets
    });
    update(newE, index);
  };

  renderSetRows() {
    const { measure } = this.state;
    for (let i = 0; i < measure; i++) {
      return (
        <RoutineExerciseSet
          index={i}
          key={i}
          set={i + 1}
          measure={measure[i]}
          handleReps={this.handleReps}
          handleDelete={this.handleDeleteRow}
        />
      );
    }
  }
  render() {
    const { exercise, handleRemove } = this.props;
    const { index, sets } = this.state;

    return (
      <Card>
        <Table collapsing celled key={index}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{exercise.name}</Table.HeaderCell>
              <Table.HeaderCell colSpan="2">
                <div>
                  {exercise.description}
                  {"       "}
                  <button className="ui button positive" onClick={this.addSet}>
                    Add set
                  </button>
                  {"       "}
                  <button
                    className="ui button negative"
                    onClick={() => handleRemove(exercise, index)}
                  >
                    <i className="remove circle icon" />
                  </button>
                </div>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Sets (x{sets})</Table.HeaderCell>
              <Table.HeaderCell>
                {exercise.exercise_category.measure_of_duration.toUpperCase()}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderSetRows()}</Table.Body>
        </Table>
      </Card>
    );
  }
}

export default connect(null, actions)(NewRoutineExercise);
