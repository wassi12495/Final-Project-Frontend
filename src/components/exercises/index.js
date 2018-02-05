import React from "react";
import { Switch, Route } from "react-router-dom";
import NewExerciseForm from "./NewExerciseForm";
import ExercisesList from "./ExercisesList";

const ExercisesContainer = ({ match }) => {
  return (
    <div>
      <h1>Exercises Container</h1>
      <Switch>
        <Route exact path={`${match.url}`} component={ExercisesList} />
        <Route path={`${match.url}/new`} component={NewExerciseForm} />
      </Switch>
    </div>
  );
};

export default ExercisesContainer;
