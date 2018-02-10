import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import ProfileContainer from "../profile";
import WorkoutContainer from "../workout";
import RoutinesContainer from "../routines";
import ExercisesContainer from "../exercises";
import CurrentWorkout from "../currentWorkout/CurrentWorkout";
import Dashboard from "./Dashboard";

class DashboardContainer extends Component {
  componentDidMount() {
    // this.props.getCurrentWorkout();
    this.props.getExercises();
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={Dashboard} />
          <Route path={`${match.url}/workouts`} component={WorkoutContainer} />
          <Route path={`${match.url}/routines`} component={RoutinesContainer} />
          <Route
            path={`${match.url}/exercises`}
            component={ExercisesContainer}
          />
          <Route
            path={`${match.url}/current_workout`}
            component={CurrentWorkout}
          />
          <Route path={`${match.url}/profile`} component={ProfileContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default withAuth(connect(mapStateToProps)(DashboardContainer));
