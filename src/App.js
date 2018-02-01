import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./services";
import NavBarContainer from "./components/navBar";
import LoginContainer from "./components/login";
import SignupContainer from "./components/signup/";
import About from "./components/about/About";

class App extends Component {
  render() {
    console.log("App Props", this.props);
    return (
      <div className="App">
        <NavBarContainer />

        <p>This is the App's body!</p>
        <div className="container">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});

export default connect(mapStateToProps, actions)(App);
