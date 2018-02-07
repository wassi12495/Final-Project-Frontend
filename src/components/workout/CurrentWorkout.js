import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import CurrentWorkoutExercise from "./CurrentWorkoutExercise";

class CurrentWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }
  componentDidMount() {
    this.setState({
      exercises: this.props.currentWorkout.exercises[0]
    });
  }
  render() {
    console.log("Current Workout", this.state);
    const exerciseCards = this.state.exercises.map((exercise, index) => {
      return <CurrentWorkoutExercise exercise={exercise} key={index} />;
    });
    return (
      <div>
        <h1>Current Workout Page</h1>
        {exerciseCards}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentWorkout: state.currentWorkout
});
export default connect(mapStateToProps, actions)(CurrentWorkout);
