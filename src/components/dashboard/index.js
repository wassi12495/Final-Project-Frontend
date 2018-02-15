import React from "react";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import { Message, Card } from "semantic-ui-react";
import NotificationsContainer from "../notifications";
import WorkoutCard from "../workout/WorkoutCard";

const Dashboard = props => {
  const { firstName, lastName, routines, workouts } = props.currentUser;
  const fullName = `${firstName} ${lastName}`;

  console.log("Dash", routines, workouts);
  const prevWorkout = workouts[workouts.length - 1];
  console.log(prevWorkout);
  const { requestMessage } = props;
  const handleClickPrevWorkout = workout => {
    props.history.push("/workouts");
  };
  return (
    <div className="ui segment">
      <h1>Welcome!</h1>
      {!!requestMessage ? <Message header={requestMessage} /> : null}
      <h2>{fullName}</h2>
      <div className="ui two cards">
        <Card>
          <Card.Content>
            <Card.Header>
              <h3>Previous Workouts</h3>
            </Card.Header>
            <Card centered>
              <WorkoutCard
                workout={prevWorkout}
                handleClick={() => handleClickPrevWorkout()}
              />
            </Card>
          </Card.Content>
        </Card>
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
  routines: auth.currentUser.routines,
  workouts: auth.currentUser.workouts,
  isTrainer: auth.currentUser.is_trainer,
  requestLoading: requests.loading,
  requestMessage: requests.message
});

export default withAuth(connect(mapStateToProps, actions)(Dashboard));
