import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Sidebar, Menu, Container, Segment } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    const { location } = this.props;
    return location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
      <Menu inverted position="left">
        <Menu.Item>
          <NavLink exact to="/">
            Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/routines">
            Routines
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/workouts">
            Workouts
          </NavLink>
        </Menu.Item>
        {this.props.currentWorkout ? (
          <Menu.Item>
            <NavLink exact to="/current_workout">
              Current Workout
            </NavLink>
          </Menu.Item>
        ) : null}
        {this.props.loggedIn ? (
          <Menu.Item position="right">
            <NavLink
              exact
              to="/"
              onClick={() => {
                this.props.logout();
              }}
            >
              Logout
            </NavLink>
          </Menu.Item>
        ) : null}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.auth.currentUser.id,
    currentWorkout: !!state.currentWorkout.currentWorkout
  };
};

export default withRouter(connect(mapStateToProps, actions)(NavBar));
