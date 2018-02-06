import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

const NavBar = props => {
  return (
    <div className="ui menu">
      <div className="item">
        <NavLink exact to="/">
          About
        </NavLink>
      </div>

      {props.loggedIn ? (
        <div className="right menu">
          <div className="item">
            <NavLink exact to="/">
              <div
                onClick={() => {
                  props.logout();
                }}
              >
                Logout
              </div>
            </NavLink>
          </div>
          <div className="item">
            <NavLink exact to="/profile">
              Profile
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="right menu">
          <div className="item">
            <NavLink exact to="/login">
              Login
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: !!state.auth.currentUser.id
  };
};

export default withRouter(connect(mapStateToProps, actions)(NavBar));
