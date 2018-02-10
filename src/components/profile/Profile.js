import React from "react";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Profile = props => {
  const { firstName, lastName } = props.currentUser;
  const fullName = `${firstName} ${lastName}`;
  return (
    <div>
      <h1>Profile page</h1>
      <h2>{fullName}</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentUser: state.auth.currentUser };
};

export default withAuth(connect(mapStateToProps, actions)(Profile));
