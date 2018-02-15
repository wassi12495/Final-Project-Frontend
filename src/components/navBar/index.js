import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Menu, Icon, Dropdown } from "semantic-ui-react";
import WorkoutFormNew from "../workout/WorkoutFormNew";

class NavBar extends Component {
  render() {
    const { location, history, isTrainer, currentWorkout } = this.props;

    return location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
      <Menu inverted position="left">
        <Menu.Item onClick={() => history.push("/")}>
          <Icon name="home" />
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
            {currentWorkout ? (
              <Dropdown.Item
                onClick={() => history.push("/current_workout")}
                text="Continue Workout"
              />
            ) : (
              <WorkoutFormNew history={history} />
            )}
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
        {isTrainer ? (
          <Menu.Item>
            <NavLink exact to="/clients">
              Clients
            </NavLink>
          </Menu.Item>
        ) : null}

        {currentWorkout ? (
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

const mapStateToProps = ({ auth, currentWorkout }) => {
  return {
    loggedIn: !!auth.currentUser.id,
    isTrainer: auth.currentUser.is_trainer,
    currentWorkout: !!currentWorkout.currentWorkout
  };
};

export default withRouter(connect(mapStateToProps, actions)(NavBar));
