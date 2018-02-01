import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      username: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      is_trainer: false
    };
  }

  handleChange = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };

    this.props.createNewUser(user);
  };

  // TODO: Add Password confirmation after validations added
  // TODO: Add Radio handle change
  render() {
    const {
      username,
      password,
      password_confirmation,
      first_name,
      last_name
    } = this.state;

    console.log("Signup state", this.state);
    console.log("Signup props", this.props);
    return (
      <div>
        <h1>Signup component</h1>
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
            <label>Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={this.handleChange}
            />

            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="first name"
              value={first_name}
              onChange={this.handleChange}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="last name"
              value={last_name}
              onChange={this.handleChange}
            />
            <label>Are you a trainer/coach? </label>
            <input type="radio" onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Signup);
