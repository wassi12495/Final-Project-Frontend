import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { adapter } from "../../services";

class NewRoutineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
      title: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const routine = {
      title: this.state.title,
      user_id: this.props.currentUser.id
    };
    adapter.routines.createRoutine(routine).then(res => {
      if (res.error) {
        this.setState({
          error: true,
          errorMessage: `Routine title ${res.error.title[0]}`
        });
      } else {
        // this.props.addRoutine(res);
        this.props.history.push("/profile");
      }
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { title, error, errorMessage } = this.state;
    return (
      <div>
        <h1>New Routine</h1>
        <button onClick={this.props.history.goBack}>Go Back</button>

        {error ? <h4>{errorMessage}</h4> : null}
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
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