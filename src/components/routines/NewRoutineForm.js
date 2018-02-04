import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NewRoutineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      title: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>New Routine</h1>
        <form onSubmit={event => this.handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, actions)(NewRoutineForm);
