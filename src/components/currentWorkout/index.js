import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import CurrentWorkout from "./CurrentWorkout";

class CurrentWorkoutContainer extends Component {
  // componentDidMount() {
  //   this.props.getCurrentWorkout();
  // }
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route to={`${match.url}/`} component={CurrentWorkout} />
      </Switch>
    );
  }
}
export default connect(null, actions)(CurrentWorkoutContainer);
