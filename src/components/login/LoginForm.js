import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Form, Message, Container, Segment, Header } from "semantic-ui-react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { history } = this.props;
    this.props.login(username, password, history);
    // if (!!username && !!password) {
    //   adapter.auth.login({ username, password }).then(res => {
    //     if (res.error) {
    //       this.setState({
    //         error: true,
    //         error_messages: res.error
    //       });
    //     } else {
    //       this.props.loginUser(username, password, this.props.history);
    //     }
    //   });
    // } else {
    //   this.setState({
    //     error: true,
    //     error_messages: ["Must provide Username and Password."]
    //   });
    // }
  };

  // TODO: Add Radio handle change
  render() {
    const { username, password } = this.state;
    const { error, errorMessages } = this.props;
    console.log("Login", this.props);
    return (
      <Container text>
        {error ? (
          <Message error header="Login Failed!" list={errorMessages} />
        ) : null}
        <Segment inverted>
          <Header as="h1" textAlign="center">
            Login
          </Header>
          <Form size="large" inverted onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Field>
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
            <Form.Button type="submit">Submit</Form.Button>
          </Form>
          <Message>
            Not a user? <Link to="/signup"> Sign up here!</Link>
          </Message>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  errorMessages: auth.errorMessages
});

export default withRouter(connect(mapStateToProps, actions)(LoginForm));
