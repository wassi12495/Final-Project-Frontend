import React from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import ClientCard from "./ClientCard";

const ClientList = props => {
  console.log("Client List", props);
  if (!!props.clients) {
    const clientCards = props.clients.map((client, index) => {
      return <ClientCard key={index} client={client} />;
    });

    return (
      <div>
        <h1>Your Clients</h1>
        {clientCards}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  clients: state.clients
});

export default connect(mapStateToProps, actions)(ClientList);
