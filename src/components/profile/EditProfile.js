import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const EditProfile = ({ currentUser }) => {
  return (
    <div>
      <h1>Edit Profile Page</h1>
      <h3>{currentUser.fullName}</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, actions)(EditProfile);
