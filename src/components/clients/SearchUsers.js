import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Modal, Button, Loader, Search, Label } from "semantic-ui-react";

class SearchUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selection: ""
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

  handleResultSelect = (e, { result }) => {
    const user = this.props.users.find(u => u.username === result.title);
    this.props.handleSelect(user);
    this.setState({
      search: result.title,
      selection: result.title
    });
  };

  handleSearchInput = e => {
    const { users } = this.props;
    const search = e.target.value;

    const results = users
      .filter(u => u.username.toLowerCase().includes(search))
      .map((user, i) => {
        return { title: user.username, description: user.first_name };
      });

    this.setState({
      search,
      results: results
    });
  };

  renderLoading() {
    return <Loader />;
  }

  renderPage() {
    const { search, results } = this.state;
    console.log(this.state);
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
          <Search
            onSearchChange={this.handleSearchInput}
            results={results}
            onResultSelect={this.handleResultSelect}
            value={search}
          />
          {this.state.selection ? <Label>{this.state.selection}</Label> : null}
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={this.onClose}>
            Okay
          </Button>
        </Modal.Actions>
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

export default connect(mapStateToProps, actions)(SearchUsers);
