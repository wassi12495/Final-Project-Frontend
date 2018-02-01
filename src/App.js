import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignupContainer from "./components/signup/SignupContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>This is the app header</header>
        <p>This is the App's body!</p>
        <Login />
        <Switch>
          <Route path="/signup" component={SignupContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
