import React from "react";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";

const Dashboard = props => {
  const { firstName, lastName } = props.currentUser;
  const fullName = `${firstName} ${lastName}`;
  return (
    <div>
      <h1>Dashboard page</h1>
      <h2>{fullName}</h2>
      <div>
        <h3>Previous Workouts</h3>
      </div>
      <div>
        <Link to={`/workouts`}>Go To Workouts</Link>
      </div>
      <div>
        <h3>Your Top Routines</h3>
      </div>
      <div>
        <Link to={`/routines`}>Go To Routines</Link>
      </div>
      <div>
        <h3>Exercises</h3>
      </div>
      <div>
        <Link to={`/exercises`}>Go To Exercises</Link>
      </div>

      <div>
        <Link to={`/profile`}>Your Profile</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  is_trainer: state.auth.currentUser.is_trainer
});

export default withAuth(connect(mapStateToProps, actions)(Dashboard));
