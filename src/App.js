import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import NavBarContainer from "./components/navBar";
import LoginContainer from "./components/login";
import SignupContainer from "./components/signup/";
import About from "./components/about/About";
import ProfileContainer from "./components/profile";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.fetchUser();
    }
  }
  render() {
    console.log("App Props", this.props);
    console.log("App state", this.state);
    return (
      <div className="App">
        <header>
          <NavBarContainer />
        </header>

        <p>This is the App's body!</p>
        <div className="container">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/profile" component={ProfileContainer} />
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
