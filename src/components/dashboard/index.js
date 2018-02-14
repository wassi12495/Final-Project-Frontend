import React from "react";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";
import NotificationsContainer from "../notifications";

const Dashboard = props => {
  const { firstName, lastName } = props.currentUser;
  const fullName = `${firstName} ${lastName}`;
  const { requestMessage } = props;
  return (
    <div className="ui segment">
      <h1>Dashboard page</h1>
      {!!requestMessage ? <Message header={requestMessage} /> : null}
      <h2>{fullName}</h2>
      <div className="ui two cards">
        <div className=" ui card">
          <div>
            <h3>Previous Workouts</h3>
          </div>
          <div>
            <Link to={`/workouts`}>Go To Workouts</Link>
          </div>
        </div>
        <div className="ui card">
          <div>
            <h3>Your Top Routines</h3>
          </div>
          <div>
            <Link to={`/routines`}>Go To Routines</Link>
          </div>
        </div>
        <div className="ui card">
          <div>
            <h3>Exercises</h3>
          </div>
          <div>
            <Link to={`/exercises`}>Go To Exercises</Link>
          </div>
        </div>
        <div className="ui card">
          <div>
            <h3>Profile</h3>
          </div>
          <div>
            <Link to={`/profile`}>Go To Your Profile</Link>
          </div>
        </div>
      </div>
      {props.isTrainer ? (
        <div>
          <div>
            <h3>Clients</h3>
          </div>
          <div>
            <Link to={`/clients`}>Go To Your Clients</Link>
          </div>
        </div>
      ) : null}
      <NotificationsContainer />
    </div>
  );
};

const mapStateToProps = ({ auth, requests }) => ({
  currentUser: auth.currentUser,
  isTrainer: auth.currentUser.is_trainer,
  requestLoading: requests.loading,
  requestMessage: requests.message
});

export default withAuth(connect(mapStateToProps, actions)(Dashboard));
