import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Table, Card } from "semantic-ui-react";
import RoutineExerciseSet from "./RoutineExerciseSet";

class NewRoutineExercise extends Component {
  componentWillMount = () => {
    const { exercise, index } = this.props;
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
  }

  addSet = () => {
    const { measure, sets, index } = this.state;
    const { exercise, update } = this.props;
    const newSets = sets + 1;
    const newE = Object.assign({}, exercise, {
      measure: [...measure, 10],
      sets: newSets
    });
    update(newE, index);
  };

  handleMeasureInput = (input, i) => {
    const { exercise, update } = this.props;
    const { measure, index } = this.state;

    const newM = [...measure.slice(0, i), input, ...measure.slice(i + 1)];
    const newE = Object.assign({}, exercise, {
      measure: newM
    });

    update(newE, index);
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

  renderSetRows = () => {
    const { measure } = this.state;
    return measure.map((m, i) => {
      return (
        <RoutineExerciseSet
          index={i}
          key={i}
          set={i + 1}
          measure={m}
          handleMeasureInput={this.handleMeasureInput}
          handleDelete={this.handleDeleteRow}
        />
      );
    });
  };

  renderColumnNames = () => {
    const { exercise } = this.props;
    return exercise.columns.map((c, i) => {
      return <Table.HeaderCell key={i}>{c}</Table.HeaderCell>;
    });
  };

  render() {
    const { exercise, handleDelete } = this.props;
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
                    onClick={() => handleDelete(index)}
                  >
                    <i className="remove circle icon" />
                  </button>
                </div>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              {/* <Table.HeaderCell>Sets (x{sets})</Table.HeaderCell>
              <Table.HeaderCell>
                {exercise.exercise_category.measure_of_duration.toUpperCase()}
              </Table.HeaderCell> */}
              {this.renderColumnNames()}
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderSetRows()}</Table.Body>
        </Table>
      </Card>
    );
  }
}

export default connect(
  null,
  actions
)(NewRoutineExercise);
