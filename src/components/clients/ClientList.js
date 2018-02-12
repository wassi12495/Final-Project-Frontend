import React from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import ClientCard from "./ClientCard";

const ClientList = ({ clients }) => {
  const clientCards = clients.map((client, index) => {
    return <ClientCard key={index} client={client} />;
  });

  return (
    <div>
      <h1>Your Clients</h1>
      {clientCards}
    </div>
  );
};

const mapStateToProps = ({ clients }) => ({
  clients: clients.clients
});

export default connect(mapStateToProps, actions)(ClientList);
