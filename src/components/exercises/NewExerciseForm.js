import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NewExerciseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
      name: "",
      description: "",
      exerciseCategory: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit Exercise", this.state);
  };

  render() {
    const { name, description, exerciseCategory } = this.state;
    return (
      <div>
        <h1>New Exercise Form</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
            <label>Description: </label>
            <input
              type="text"
              value={description}
              onChange={this.handleChange}
              name="description"
            />
            <label>Exercise Category: </label>
            <input
              type="text"
              value={exerciseCategory}
              onChange={this.handleChange}
              name="exerciseCategory"
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, actions)(NewExerciseForm);
