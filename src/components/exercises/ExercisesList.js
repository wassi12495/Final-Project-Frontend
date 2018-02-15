import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid, Header } from "semantic-ui-react";
import ExerciseShow from "./ExerciseShow";
import ExerciseCard from "./ExerciseCard";

class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: null
    };
  }
  handleSelectCard = exercise => {
    this.setState({
      exercise
    });
  };
  render() {
    const { exercises } = this.props;
    const { exercise } = this.state;
    const exerciseCards = exercises.map((e, index) => {
      return (
        <ExerciseCard
          exercise={e}
          key={index}
          handleClick={this.handleSelectCard}
        />
      );
    });

    return (
      <div className="ui container">
        <Grid>
          <Grid.Column width={4}>
            <Segment vertical>
              <Header as="h1">Exercises</Header>
              <div className="ui cards">{exerciseCards}</div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment textAlign="center" raised size="huge">
              <ExerciseShow exercise={exercise} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ exercises }) => ({
  exercises: exercises.exercises
});

export default connect(mapStateToProps, null)(ExercisesList);
