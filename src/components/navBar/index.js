import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Sidebar, Menu, Container, Segment, Dropdown } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    const { location, history } = this.props;
    return location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
      <Menu inverted position="left">
        <Menu.Item>
          <NavLink exact to="/">
            Dashboard
          </NavLink>
        </Menu.Item>
        <Dropdown item text="Routines">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => history.push("/routines")}
              text="Your Routines"
            />
            <Dropdown.Item
              onClick={() => history.push("/routines/new")}
              text="Create a Routine"
            />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Workouts">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => history.push("/workouts")}
              text="Your Workouts"
            />
            <Dropdown.Item
              onClick={() => history.push("/workouts/new")}
              text="Start a Workout"
            />
          </Dropdown.Menu>
        </Dropdown>

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
