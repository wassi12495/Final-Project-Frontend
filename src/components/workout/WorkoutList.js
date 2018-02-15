import React from "react";
import { connect } from "react-redux";
import { Segment, Grid, Header } from "semantic-ui-react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = props => {
  const workouts = props.workouts.map((workout, index) => {
    return <WorkoutCard workout={workout} key={index} />;
  });
  return (
    <div className="ui container">
      <Grid>
        <Grid.Column width={4}>
          <Segment vertical>
            <Header as="h1">Your Workouts</Header>
            <div className="ui cards">{workouts}</div>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ workouts }) => ({
  workouts: workouts.workouts
});

export default connect(mapStateToProps)(WorkoutList);
