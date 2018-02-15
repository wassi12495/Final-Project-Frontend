import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Menu, Icon, Dropdown } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    const { location, history } = this.props;
    return location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
      <Menu inverted position="left">
        <Menu.Item>
          <NavLink exact to="/">
            <Icon name="home" />
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
        <Dropdown item text="Exercises">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => history.push("/exercises")}
              text="Your Exercises"
            />
            <Dropdown.Item
              onClick={() => history.push("/exercises/new")}
              text="Create an Exercise"
            />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>
          <NavLink exact to="/clients">
            Clients
          </NavLink>
        </Menu.Item>

        {this.props.currentWorkout ? (
          <Menu.Item
            color="red"
            active={true}
            onClick={() => history.push("/current_workout")}
          >
            Workout In Progress
          </Menu.Item>
        ) : null}
        <Menu.Item
          position="right"
          onClick={() => {
            this.props.logout();
          }}
        >
          Logout
        </Menu.Item>
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
