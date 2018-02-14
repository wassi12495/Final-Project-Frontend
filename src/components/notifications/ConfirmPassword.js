import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Modal, Form, Button, Loader } from "semantic-ui-react";

class ConfirmPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      password: ""
    };
  }

  onClose = () => {
    this.setState({
      modal: false
    });
  };

  handleAcceptRequest = () => {
    const { request, index } = this.props;
    const { password } = this.state;
    const data = { request, password };
    this.props.acceptRequest(data);
    this.props.updateNotificationsRequests(index);
    this.onClose();
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

  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { password } = this.state;

    return (
      <Modal
        trigger={
          <Button positive onClick={this.onOpen}>
            Accept
          </Button>
        }
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>Confirm Your Identity</Modal.Header>
        <Modal.Content>
          <Form>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={this.handleAcceptRequest}>
            Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = ({ clients }) => ({});

export default connect(mapStateToProps, actions)(ConfirmPassword);
