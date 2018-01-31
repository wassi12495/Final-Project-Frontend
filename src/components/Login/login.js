import React, { Component } from "react";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: "",
        password: ""
      }
    };
  }

  render() {
    return (
      <div>
        <p>This is the "Login" component</p>
      </div>
    );
  }
}

// export default Login;
