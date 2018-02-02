import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

const NavBar = props => {
  console.log("Navbar", props);
  return (
    <div>
      <NavLink exact to="/">
        About
      </NavLink>
      {props.loggedIn ? (
        <NavLink exact to="/">
          <div
            onClick={() => {
              props.logout();
            }}
          >
            Logout
          </div>
        </NavLink>
      ) : (
        <NavLink exact to="/login">
          Login
        </NavLink>
      )}
      <NavLink exact to="/profile">
        Profile
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: !!state.auth.currentUser.id
  };
};

export default withRouter(connect(mapStateToProps, actions)(NavBar));
