import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NewRoutineForm from "./NewRoutineForm";
import RoutinesList from "./RoutinesList";

const RoutinesContainer = ({ match }) => {
  return (
    <div>
      <div>
        <div>
          <Link to={`${match.url}`}>Your Routines</Link>
        </div>
        <div>
          <Link to={`${match.url}/new`}>New Routine</Link>
        </div>
      </div>

      <Switch>
        <Route exact path={`${match.url}`} component={RoutinesList} />
        <Route path={`${match.url}/new`} component={NewRoutineForm} />
      </Switch>
    </div>
  );
};

export default RoutinesContainer;
