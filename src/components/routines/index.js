import React from "react";
import { Switch, Route } from "react-router-dom";
import NewRoutineForm from "./NewRoutineForm";

const RoutinesContainer = () => {
  return (
    <div>
      <h1>Routines Container</h1>
      <Switch>
        <Route path="/profile/routines/new" component={NewRoutineForm} />
      </Switch>
    </div>
  );
};

export default RoutinesContainer;
