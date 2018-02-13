import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {
  Modal,
  Form,
  Button,
  TextArea,
  Label,
  Loader
} from "semantic-ui-react";
import SearchUsers from "./SearchUsers";

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user: null,
      message: ""
    };
  }

  onClose = () => {
    const { user, message } = this.state;
    const data = { client: user, message };
    this.props.addClientRequest(data);
    this.setState({
      modal: false
    });
  };
  onOpen = () => {
    this.setState({
      modal: true
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelectUser = user => {
    this.setState({
      user: user
    });
  };
  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { message, user } = this.state;

    return (
      <Modal
        trigger={
          <Button positive onClick={this.onOpen}>
            Add Client
          </Button>
        }
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>Request A New Client</Modal.Header>
        <Modal.Content>
          <SearchUsers handleSelect={this.handleSelectUser} />

          <Form>
            {user ? <Label>{user.username}</Label> : null}
            <Form.Field
              label="Message"
              name="message"
              value={message}
              control={TextArea}
              placeholder="Write a message..."
              onChange={this.handleChange}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={this.onClose}>
            Send Request
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
  loading: clients.loading
});

export default connect(mapStateToProps, actions)(AddClient);
