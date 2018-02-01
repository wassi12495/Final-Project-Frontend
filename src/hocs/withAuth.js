import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../services";
import { Redirect } from "react-router-dom";

const withAuth = wrappedComponent => {
  class AuthenticatedComponent extends Component {
    state = { authenticated: this.props.loggedIn };
    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.props.fetchUser();
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
          <wrappedComponent {...this.props} />
        ) : (
          <Redirect to="/login" />
        );
      } else {
        null;
      }
    }
  }

  const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser.id
  });

  return connect(mapStateToProps, actions)(AuthenticatedComponent);
};
export default withAuth;
