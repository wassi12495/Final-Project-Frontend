import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import Profile from "./Profile";
import WorkoutContainer from "../workout";
import RoutinesContainer from "../routines";
import ExercisesContainer from "../exercises";

class ProfileContainer extends Component {
  // componentDidMount() {
  //   this.props.getCurrentWorkout();
  // }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route path={`${match.url}/workouts`} component={WorkoutContainer} />
          <Route path={`${match.url}/routines`} component={RoutinesContainer} />
          <Route
            path={`${match.url}/exercises`}
            component={ExercisesContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default withAuth(connect(mapStateToProps)(ProfileContainer));
