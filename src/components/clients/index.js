import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ClientList from "./ClientList";

class ClientsContainer extends Component {
  render() {
    const { match } = this.props;
    return !this.props.isTrainer ? (
      <Redirect to="/" />
    ) : (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={ClientList} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isTrainer: state.auth.currentUser.is_trainer
});
export default withAuth(connect(mapStateToProps)(ClientsContainer));
