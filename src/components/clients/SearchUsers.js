import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Modal, Button, Input, Loader } from "semantic-ui-react";

class SearchUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      search: ""
    };
  }

  onClose = () => {
    this.setState({
      modal: false
    });
  };
  onOpen = () => {
    this.setState({
      modal: true
    });
  };

  handleSearchInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  renderLoading() {
    return <Loader />;
  }

  renderPage() {
    const { search } = this.state;
    return (
      <Modal
        trigger={
          <Button positive onClick={this.onOpen}>
            Add User
          </Button>
        }
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>Add New Client</Modal.Header>
        <Modal.Content>
          <Input
            fluid
            name="search"
            value={search}
            onChange={this.handleSearchInput}
            placeholder="Search Users..."
          />
        </Modal.Content>
      </Modal>
    );
  }

  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}
const mapStateToProps = ({ clients }) => ({
  users: clients.users,
  loading: clients.loading
});

export default connect(null, actions)(SearchUsers);
