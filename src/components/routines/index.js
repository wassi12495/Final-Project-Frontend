import React from "react";
import { Switch, Route } from "react-router-dom";
import NewRoutineForm from "./NewRoutineForm";
import RoutinesList from "./RoutinesList";

const RoutinesContainer = ({ match }) => {
  console.log("Routine Container", match);
  return (
    <div>
      <h1>Routines Container</h1>
      <Switch>
        <Route exact path={`${match.url}`} component={RoutinesList} />
        <Route path={`${match.url}/new`} component={NewRoutineForm} />
      </Switch>
    </div>
  );
};

export default RoutinesContainer;
