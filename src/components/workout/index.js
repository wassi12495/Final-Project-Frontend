import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import * as actions from "../../actions";
import WorkoutFormNew from "./WorkoutFormNew";
import WorkoutList from "./WorkoutList";

class WorkoutContainer extends Component {
  componentDidMount() {
    this.props.getWorkouts();
    // this.props.getCurrentWorkout();
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <div>
          <div>
            <Link to={`${match.url}/new`}>New Workout</Link>
          </div>
          <div>
            <Link to={`${match.url}`}>See Previous Workouts</Link>
          </div>
        </div>
        <Switch>
          <Route exact path={`${match.url}`} component={WorkoutList} />
          <Route exact path={`${match.url}/new`} component={WorkoutFormNew} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  workouts: state.auth.workouts
});
export default connect(mapStateToProps, actions)(WorkoutContainer);
