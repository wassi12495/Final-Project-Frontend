import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";

const ProfileContainer = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/new_workout" />
      </Switch>
    </div>
  );
};

export default ProfileContainer;
