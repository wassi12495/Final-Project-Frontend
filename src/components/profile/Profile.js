import React from "react";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Profile = props => {
  console.log("Profile props", props.currentUser);
  return <h1>Profile page</h1>;
};

const mapStateToProps = state => {
  console.log(state);
  return { currentUser: state.auth.currentUser };
};

export default withAuth(connect(mapStateToProps, actions)(Profile));
