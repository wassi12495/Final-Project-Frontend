import React, { Component } from "react";
import "./App.css";
import { Login } from "./components/Login/login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>This is the app</header>
        <p>This is the App's body!</p>
        <Login />
      </div>
    );
  }
}

export default App;
