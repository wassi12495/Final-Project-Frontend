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
        <p>This is the log in</p>
      </div>
    );
  }
}

// export default Login;
