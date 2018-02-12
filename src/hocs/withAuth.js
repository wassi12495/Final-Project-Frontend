import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Redirect } from "react-router-dom";

const withAuth = WrappedComponent => {
  class AuthenticatedComponent extends Component {
    state = { authenticated: this.props.loggedIn };
    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.props.fetchUser();
        this.props.getCurrentWorkout();
        this.props.getExerciseCategories();
        this.props.getClients();
      } else {
        this.setState({ authenticated: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authenticated: true });
      }
    }

    render() {
      if (this.state.authenticated) {
        return this.props.loggedIn ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to="/login" />
        );
      } else {
        return null;
      }
    }
  }

  const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser.id,
    isTrainer: state.auth.currentUser.is_trainer
  });

  return connect(mapStateToProps, actions)(AuthenticatedComponent);
};
export default withAuth;
