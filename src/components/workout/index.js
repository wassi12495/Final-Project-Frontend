import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as actions from "../../actions";
import { Loader } from "semantic-ui-react";
import withAuth from "../../hocs/withAuth";
import WorkoutFormNew from "./WorkoutFormNew";
import WorkoutList from "./WorkoutList";

class WorkoutContainer extends Component {
  componentDidMount() {
    this.props.getWorkouts();
    // this.props.getCurrentWorkout();
  }

  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { match, workouts } = this.props;
    console.log(workouts);
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={WorkoutList} />
          <Route exact path={`${match.url}/new`} component={WorkoutFormNew} />
        </Switch>
      </div>
    );
  }
  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = ({ workouts }) => ({
  workouts: workouts.workouts,
  loading: workouts.loading
});
export default withAuth(connect(mapStateToProps, actions)(WorkoutContainer));
