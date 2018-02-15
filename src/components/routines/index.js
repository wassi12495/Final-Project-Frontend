import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as actions from "../../actions";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";
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
        <Switch>
          <Route exact path={`${match.url}`} component={RoutinesList} />
          <Route path={`${match.url}/new`} component={NewRoutineForm} />
        </Switch>
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
