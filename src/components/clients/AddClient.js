import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {
  Modal,
  Form,
  Button,
  TextArea,
  Input,
  Loader
} from "semantic-ui-react";
import SearchUsers from "./SearchUsers";

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      message: ""
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelectUser = e => {
    e.preventDefault();
  };
  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { message } = this.state;

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
        <Modal.Header>Add New Client</Modal.Header>
        <Modal.Content>
          <SearchUsers />

          <Form>
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
