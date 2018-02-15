import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as actions from "../../actions";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import { Loader, Container } from "semantic-ui-react";
import NewExerciseForm from "./NewExerciseForm";
import ExercisesList from "./ExercisesList";

class ExercisesContainer extends Component {
  componentDidMount() {
    console.log("ExercisesContainer", this.props);
    this.props.getExercises();
  }
  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { match } = this.props;
    return (
      <div className="ui container">
        <div className="ui segment">
          <Switch>
            <Route exact path={`${match.url}`} component={ExercisesList} />
            <Route path={`${match.url}/new`} component={NewExerciseForm} />
          </Switch>
        </div>
      </div>
    );
  }

  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = ({ exercises, exerciseCategories }) => ({
  exerciseCategories: exerciseCategories,
  exercises: exercises.exercises,
  loading: exercises.loading,
  error: exercises.error,
  errorMessages: exercises.errorMessages
});

export default withAuth(connect(mapStateToProps, actions)(ExercisesContainer));
