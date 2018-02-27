import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Grid, Form, Message, Segment, Header } from "semantic-ui-react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      is_trainer: false
    };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.loggingIn) {
      debugger;
      const { username, password } = this.state;
      console.log("Signed Up, loggingIn");
      this.props.login(username, password, this.props.history);
    }
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
    this.props.signup(user);
  };

  render() {
    const {
      username,
      password,
      password_confirmation,
      first_name,
      last_name
    } = this.state;
    const { error, errorMessages } = this.props;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column textAlign="left" style={{ maxWidth: 600 }}>
          {error ? (
            <Message error header="Signup Failed!" list={errorMessages} />
          ) : null}

          <Segment stacked inverted>
            <Header as="h1" textAlign="center">
              Create An Account
            </Header>
            <Form inverted size="large" onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="ui input fluid"
                    name="first_name"
                    placeholder="First Name"
                    value={first_name}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input
                    className="ui input fluid"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={last_name}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label>Username</label>
                <input
                  className="ui input fluid"
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
                  className="ui input fluid"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password Confirmation</label>
                <input
                  className="ui input fluid"
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  value={password_confirmation}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Checkbox
                type="radio"
                onChange={this.handleSelectIsTrainer}
                label="Are you a trainer/coach?"
              />

              <Form.Button positive type="submit">
                Create Account
              </Form.Button>
            </Form>
          </Segment>
          <Message>
            Already a user? <Link to="/login"> Log in here!</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  error: user.error,
  errorMessages: user.errorMessages,
  loading: user.loading,
  loggingIn: user.loggingIn
});

export default withRouter(connect(mapStateToProps, actions)(Signup));
