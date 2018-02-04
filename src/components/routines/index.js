import React from "react";
import { Switch, Route } from "react-router-dom";
import NewRoutineForm from "./NewRoutineForm";

const RoutinesContainer = ({ match }) => {
  return (
    <div>
      <h1>Routines Container</h1>
      <Switch>
        <Route path={`${match.url}/new`} component={NewRoutineForm} />
      </Switch>
    </div>
  );
};

export default RoutinesContainer;
