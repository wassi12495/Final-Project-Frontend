import React from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import ClientCard from "./ClientCard";

const ClientList = props => {
  console.log("Client List", props);
  const clientCards = props.clients.map((client, index) => {
    return <ClientCard key={index} client={client} />;
  });
  return (
    <div>
      <h1>Your Clients</h1>
      {clientCards}
    </div>
  );
};

const mapStateToProps = state => ({
  clients: state.clients
});

export default connect(mapStateToProps, actions)(ClientList);
