import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Grid, Form, Message, Segment, Header } from "semantic-ui-react";

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
  };

  // TODO: Add Radio handle change
  render() {
    const { username, password } = this.state;
    const { error, errorMessages } = this.props;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          {error ? (
            <Message error header="Login Failed!" list={errorMessages} />
          ) : null}
          <Segment stacked inverted>
            <Header as="h1" textAlign="center">
              Login
            </Header>
            <Form size="large" inverted onSubmit={this.handleSubmit}>
              <Form.Field>
                <div className="ui left icon input">
                  <input
                    className="ui input fluid"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <i className="user icon" />
                </div>
              </Form.Field>
              <Form.Field>
                <div className="ui left icon input">
                  <input
                    className="ui input fluid"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <i className="lock icon" />
                </div>
              </Form.Field>
              <Form.Button fluid size="large" type="submit">
                Log In
              </Form.Button>
            </Form>
          </Segment>
          <Message>
            Not a user? <Link to="/signup"> Sign up here!</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  errorMessages: auth.errorMessages
});

export default withRouter(connect(mapStateToProps, actions)(LoginForm));
