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
      } else {
        this.setState({ authenticated: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authenticated: true });
      } else if (nextProps.error) {
        this.props.history.push("/login");
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

  const mapStateToProps = ({ auth }) => ({
    loggedIn: !!auth.currentUser.id,
    isTrainer: auth.currentUser.is_trainer,
    error: auth.error,
    errorMessages: auth.errorMessages
  });

  return connect(
    mapStateToProps,
    actions
  )(AuthenticatedComponent);
};
export default withAuth;
