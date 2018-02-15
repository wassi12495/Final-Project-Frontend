import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import * as actions from "../../actions";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import { Loader, Menu } from "semantic-ui-react";
import NewRoutineForm from "./NewRoutineForm";
import RoutinesList from "./RoutinesList";
import RoutineShow from "./RoutineShow";

class RoutinesContainer extends Component {
  componentDidMount() {
    console.log("Routines Container", this.props);
    this.props.getRoutines();
  }

  renderLoading() {
    return <Loader />;
  }

  renderPage() {
    const { match, routines } = this.props;
    return (
      <div className="ui container">
        <div className="ui grid">
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
      </div>
    );
  }

  render() {
    return (
      <div className="ui container">
        {this.props.loading ? this.renderLoading() : this.renderPage()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, routines }) => ({
  currentUser: auth.currentUser,
  routines: routines.routines,
  loading: routines.loading,
  error: routines.error,
  errorMessages: routines.errorMessages
});
export default withAuth(connect(mapStateToProps, actions)(RoutinesContainer));
