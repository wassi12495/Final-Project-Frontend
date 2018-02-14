import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Table } from "semantic-ui-react";
import RoutineExerciseSet from "./RoutineExerciseSet";

class NewRoutineExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: [{ set: 1, reps: 10 }],
      amt: 1,
      index: props.index
    };
  }

  componentDidUpdate() {
    const { sets, amt, index } = this.state;
    const update = { sets, amt };
    const params = { update, index };
    this.props.updateCurrentNewRoutine(params);
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

  handleDeleteRow = index => {
    const sets = [...this.state.sets.slice(0, index)];
    this.state.sets.slice(index + 1).forEach(s => {
      sets.push({ set: s.set - 1, reps: s.reps });
    });
    this.setState({
      sets,
      amt: this.state.amt - 1
    });
  };
  renderSetRows() {
    let setRows = this.state.sets.map((s, index) => {
      return (
        <RoutineExerciseSet
          index={index}
          key={index}
          set={s.set}
          reps={s.reps}
          handleReps={this.handleReps}
          handleDelete={this.handleDeleteRow}
        />
      );
    });
    return setRows;
  }
  render() {
    const { exercise, handleRemove } = this.props;
    const { index } = this.state;

    return (
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
                  onClick={() => handleRemove(exercise, this.props.index)}
                >
                  <i className="remove circle icon" />
                </button>
              </div>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Sets (x{this.state.amt})</Table.HeaderCell>
            <Table.HeaderCell>
              {exercise.exercise_category.measure_of_duration.toUpperCase()}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{this.renderSetRows()}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <button onClick={this.addSet}>Add set</button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default connect(null, actions)(NewRoutineExercise);
