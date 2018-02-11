import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

class ClientList extends Component {
  render() {
    return <div>Client List</div>;
  }
}

const mapStateToProps = state => ({
  clients: state.clients
});

export default connect(mapStateToProps, actions)(ClientList);
