import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

class ClientList extends Component {
  render() {
    console.log("Client List", this.props.clients);
    return <div>Client List</div>;
  }
}

const mapStateToProps = state => ({
  clients: state.clients
});

export default connect(mapStateToProps, actions)(ClientList);
