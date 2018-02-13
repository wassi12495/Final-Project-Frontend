import React from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import ClientCard from "./ClientCard";
import { Message } from "semantic-ui-react";

const ClientList = ({ clients, requestMessage }) => {
  const clientCards = clients.map((client, index) => {
    return <ClientCard key={index} client={client} />;
  });
  return (
    <div>
      {!!requestMessage ? <Message header={requestMessage} /> : null}
      <h1>Your Clients</h1>
      {clientCards}
    </div>
  );
};

const mapStateToProps = ({ clients, requests }) => ({
  clients: clients.clients,
  requestLoading: requests.loading,
  requestMessage: requests.message
});

export default connect(mapStateToProps, actions)(ClientList);
