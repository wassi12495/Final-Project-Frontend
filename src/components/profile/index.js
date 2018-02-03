import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import WorkoutFormNew from "../workout/WorkoutFormNew";

const ProfileContainer = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/new_workout" component={WorkoutFormNew} />
      </Switch>
    </div>
  );
};

export default ProfileContainer;
