import React from "react";
import { Switch, Route } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import Profile from "./Profile";
import WorkoutContainer from "../workout";
import RoutinesContainer from "../routines";
import ExercisesContainer from "../exercises";

const ProfileContainer = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path={`${match.url}/workouts`} component={WorkoutContainer} />
        <Route path={`${match.url}/routines`} component={RoutinesContainer} />
        <Route path={`${match.url}/exercises`} component={ExercisesContainer} />
      </Switch>
    </div>
  );
};

export default withAuth(ProfileContainer);
