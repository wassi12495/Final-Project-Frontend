import React from "react";
import { Switch, Route } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import NewExerciseForm from "./NewExerciseForm";
import ExercisesList from "./ExercisesList";

const ExercisesContainer = ({ match, exercises, exerciseCategories }) => {
  return !!exercises && !!exerciseCategories ? (
    <div>
      <h1>Exercises Container</h1>

      <Switch>
        <Route exact path={`${match.url}`} component={ExercisesList} />
        <Route path={`${match.url}/new`} component={NewExerciseForm} />
      </Switch>
    </div>
  ) : (
    <div>Loading</div>
  );
};

const mapStateToProps = state => ({
  exercises: state.exercises,
  exerciseCategories: state.exerciseCategories,
  loading: state.loading
});
export default withAuth(connect(mapStateToProps)(ExercisesContainer));
