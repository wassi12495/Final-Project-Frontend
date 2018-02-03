import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
class WorkoutFormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser
    };
  }
  render() {
    console.log("New Workout props", this.props);
    return (
      <div>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <h1>New Workout Form</h1>
        <div>
          <form>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};
export default connect(mapStateToProps, actions)(WorkoutFormNew);
