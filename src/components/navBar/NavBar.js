import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Menu, Container } from "semantic-ui-react";

const NavBar = props => {
  return (
    <Container>
      <Menu>
        <Menu.Item>
          <NavLink exact to="/about">
            About
          </NavLink>
        </Menu.Item>
        {props.currentWorkout ? (
          <Menu.Item>
            <NavLink exact to="/current_workout">
              Current Workout
            </NavLink>
          </Menu.Item>
        ) : null}

        {props.loggedIn ? (
          <div className="right menu">
            <Menu.Item position="right">
              <NavLink exact to="/">
                Dashboard
              </NavLink>
            </Menu.Item>
            <Menu.Item position="right">
              <NavLink
                exact
                to="/"
                onClick={() => {
                  props.logout();
                }}
              >
                Logout
              </NavLink>
            </Menu.Item>
          </div>
        ) : (
          <div className="right menu">
            <Menu.Item>
              <NavLink exact to="/login">
                Login
              </NavLink>
            </Menu.Item>
          </div>
        )}
      </Menu>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: !!state.auth.currentUser.id,
    currentWorkout: !!state.currentWorkout
  };
};

export default withRouter(connect(mapStateToProps, actions)(NavBar));
