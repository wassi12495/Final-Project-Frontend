import React from "react";
import { Switch, Route } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import Profile from "./Profile";
import WorkoutFormNew from "../workout/WorkoutFormNew";
import RoutinesContainer from "../routines";
import ExercisesContainer from "../exercises";

const ProfileContainer = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path={`${match.url}/new_workout`} component={WorkoutFormNew} />
        <Route path={`${match.url}/routines`} component={RoutinesContainer} />
        <Route path={`${match.url}/exercises`} component={ExercisesContainer} />
      </Switch>
    </div>
  );
};

export default withAuth(ProfileContainer);
