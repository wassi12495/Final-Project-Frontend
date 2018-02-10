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
import Dashboard from "./components/dashboard";
import WorkoutContainer from "./components/workout";
import RoutinesContainer from "./components/routines";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.fetchUser();
    }
    this.props.getExerciseCategories();
    this.props.getExercises();
  }
  renderLoading = () => {
    return <div>LOADING...</div>;
  };

  render() {
    return (
      <div className="App">
        <div>
          <NavBarContainer />

          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/signup" component={SignupContainer} />
              <Route path="/profile" component={ProfileContainer} />
              <Route path="/workouts" component={WorkoutContainer} />
              <Route path="/routines" component={RoutinesContainer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("APP State", state);
  return {
    currentUser: state.auth.currentUser,
    exerciseCategories: state.exerciseCategories,
    exercises: state.exercises,
    loading: state.loading,
    currentWorkout: state.currentWorkout
  };
};

export default connect(mapStateToProps, actions)(App);
