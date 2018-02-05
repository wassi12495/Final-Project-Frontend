import React from "react";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";

const Profile = props => {
  const { firstName, lastName } = props.currentUser;
  const fullName = `${firstName} ${lastName}`;
  console.log("Profile props", props.currentUser);
  return (
    <div>
      <h1>Profile page</h1>
      <h2>{fullName}</h2>
      <div>
        <h3>Previous Workouts</h3>
      </div>
      <div>
        <Link to={`${props.match.url}new_workout`}>Add Workout</Link>
      </div>
      <div>
        <h3>Your Top Routines</h3>
      </div>
      <div>
        <Link to={`${props.match.url}/routines`}>Go To Routines</Link>
      </div>
      <div>
        <h3>Exercises</h3>
      </div>
      <div>
        <Link to={`${props.match.url}/exercises`}>Go To Exercises</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { currentUser: state.auth.currentUser };
};

export default withAuth(connect(mapStateToProps, actions)(Profile));
