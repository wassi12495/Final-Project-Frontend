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
        <div
          onClick={() => {
            props.logout();
          }}
        >
          <NavLink exact to="/">
            Logout
          </NavLink>
        </div>
      ) : (
        <NavLink exact to="/login">
          Login
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});

export default withRouter(connect(mapStateToProps, actions)(NavBar));
