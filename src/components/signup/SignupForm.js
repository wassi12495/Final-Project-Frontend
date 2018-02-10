import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { adapter } from "../../services";
import { Form, Message, Container, Segment, Header } from "semantic-ui-react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      error_messages: [],
      username: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      is_trainer: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelectIsTrainer = e => {
    this.setState({
      is_trainer: !this.state.is_trainer
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      is_trainer: this.state.is_trainer
    };
    adapter.user.signup(user).then(res => {
      if (res.errors) {
        this.setState({
          error: true,
          error_messages: res.errors
        });
      } else {
        this.props.loginUser(user.username, user.password, this.props.history);
      }
    });
  };

  // TODO: Add Password confirmation after validations added
  // TODO: Add Radio handle change
  render() {
    const {
      username,
      password,
      password_confirmation,
      first_name,
      last_name,
      error
    } = this.state;
    console.log(this.state);
    return (
      <Container text>
        {error ? (
          <Message
            error
            header="Signup Failed!"
            list={this.state.error_messages}
          />
        ) : null}

        <Segment inverted>
          <Header as="h1" textAlign="center">
            Signup
          </Header>
          <Form inverted size="large" onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  value={password_confirmation}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={first_name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Checkbox
              type="radio"
              onChange={this.handleSelectIsTrainer}
              label="Are you a trainer/coach?"
            />

            <Form.Button type="submit">Submit</Form.Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default withRouter(connect(null, actions)(Signup));
