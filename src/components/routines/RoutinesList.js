import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid, Header } from "semantic-ui-react";
import RoutineCard from "./RoutineCard";
import RoutineShow from "./RoutineShow";

class RoutinesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: null
    };
  }

  handleSelectCard = routine => {
    this.setState({
      routine
    });
  };

  render() {
    const { routines } = this.props;
    const { routine } = this.state;
    const myRoutines = routines.map((r, index) => {
      return (
        <RoutineCard
          routine={r}
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
              <Header as="h1">Your Routines</Header>
              <div className="ui cards">{myRoutines}</div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment textAlign="center" raised size="huge">
              <RoutineShow routine={routine} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ routines }) => ({
  routines: routines.routines
});
export default connect(mapStateToProps, null)(RoutinesList);
