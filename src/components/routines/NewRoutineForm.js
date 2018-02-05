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
      title: "",
      exercises: []
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
        <button onClick={this.props.history.goBack}>Go Back</button>

        <h1>New Routine</h1>
        <div>
          <div>
            {error ? <h4>{errorMessage}</h4> : null}
            <label>Routine Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <div>
              <label>Exercises</label>
              <div>Add Exercise</div>
            </div>

            <div>
              <button onClick={this.handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, actions)(NewRoutineForm);
