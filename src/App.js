import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./services";
import LoginContainer from "./components/login/";
import SignupContainer from "./components/signup/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>This is the app header</header>
        <p>This is the App's body!</p>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});

export default connect(mapStateToProps, actions)(App);
