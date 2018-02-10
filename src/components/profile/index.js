import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import Profile from "./Profile";

class ProfileContainer extends Component {
  // componentDidMount() {
  //   this.props.getCurrentWorkout();
  // }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={Profile} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default withAuth(connect(mapStateToProps)(ProfileContainer));
