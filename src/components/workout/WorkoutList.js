import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid, Header } from "semantic-ui-react";
import WorkoutCard from "./WorkoutCard";
import WorkoutShow from "./WorkoutShow";

class WorkoutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: null
    };
  }

  handleSelectCard = workout => {
    this.setState({
      workout
    });
  };
  render() {
    const { workout } = this.state;
    const workouts = this.props.workouts.map((workout, index) => {
      return (
        <WorkoutCard
          workout={workout}
          handleClick={this.handleSelectCard}
          key={index}
        />
      );
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
          <Grid.Column width={12}>
            <Segment textAlign="center" raised size="huge">
              <WorkoutShow workout={workout} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ workouts }) => ({
  workouts: workouts.workouts
});

export default connect(mapStateToProps)(WorkoutList);
