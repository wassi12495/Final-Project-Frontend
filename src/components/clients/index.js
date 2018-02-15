import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as actions from "../../actions";
import withAuth from "../../hocs/withAuth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import ClientList from "./ClientList";
import AddClient from "./AddClient";

class ClientsContainer extends Component {
  componentDidMount() {
    this.props.getClients();
    this.props.getUsers();
  }
  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { match } = this.props;
    return !this.props.isTrainer ? (
      <Redirect to="/" />
    ) : (
      <div className="ui segment">
        <AddClient />
        <Switch>
          <Route exact path={`${match.url}`} component={ClientList} />
        </Switch>
      </div>
    );
  }

  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = ({ auth, clients }) => ({
  isTrainer: auth.currentUser.is_trainer,
  loading: clients.loading
});
export default withAuth(connect(mapStateToProps, actions)(ClientsContainer));
