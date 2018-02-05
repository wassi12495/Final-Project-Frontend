import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import NewRoutineForm from "./NewRoutineForm";
import RoutinesList from "./RoutinesList";
import RoutineShow from "./RoutineShow";

const RoutinesContainer = ({ match, routines }) => {
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
        <Route
          path={`${match.url}/:id`}
          render={({ match }) => {
            const routine = routines.find(
              r => r.id === parseInt(match.params.id, 10)
            );
            return routine ? (
              <RoutineShow routine={routine} />
            ) : (
              <div>Loading...</div>
            );
          }}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  routines: state.auth.currentUser.routines
});
export default connect(mapStateToProps)(RoutinesContainer);
