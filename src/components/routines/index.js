import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import NewRoutineForm from "./NewRoutineForm";
import RoutinesList from "./RoutinesList";
import RoutineShow from "./RoutineShow";

const RoutinesContainer = ({ match, routines }) => {
  return !!routines ? (
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
  ) : (
    <div> Loading </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  routines: state.routines
});
export default withAuth(connect(mapStateToProps)(RoutinesContainer));
