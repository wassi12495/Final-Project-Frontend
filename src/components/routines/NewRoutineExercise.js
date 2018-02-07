import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
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
  renderSetRows() {
    let setRows = this.state.sets.map((s, index) => {
      return (
        <RoutineExerciseSet
          index={index}
          key={index}
          set={s.set}
          reps={s.reps}
          handleReps={this.handleReps}
        />
      );
    });
    return <div>{setRows}</div>;
  }
  render() {
    const { key, exercise } = this.props;
    // this.props.updateState(this.state);
    const { sets, amt, index } = this.state;
    const update = { sets, amt };
    const params = { update, index };
    this.props.updateCurrentNewRoutine(params);
    return (
      <div key={key}>
        <span>
          <h4>
            {exercise.name} (x{this.state.amt})
          </h4>
          <h4>{exercise.exercise_category.measure_of_duration}</h4>
          <button onClick={this.addSet}>Add set</button>
        </span>
        {this.renderSetRows()}
      </div>
    );
  }
}

export default connect(null, actions)(NewRoutineExercise);
