import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    // console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    this.props.loginUser(username, password, this.props.history);
  };

  // TODO: Add Radio handle change
  render() {
    const { username, password, error } = this.state;

    // console.log("Login state", this.state);
    // console.log("Login props", this.props);
    return (
      <div>
        <h1>Login component</h1>
        {error ? <h3> Invalid Login </h3> : null}
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(LoginForm));
