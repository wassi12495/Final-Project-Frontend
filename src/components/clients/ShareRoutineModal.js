import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Modal, Button, Loader } from "semantic-ui-react";

class ShareRoutineModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      routine: null
    };
  }

  componentDidMount() {
    this.props.getRoutines();
  }

  onClose = () => {
    this.setState({
      modal: false
    });
  };

  handleCancelRequest = () => {
    this.setState({
      routine: null,
      modal: false
    });
  };

  handleSubmitRequest = () => {
    const { routine } = this.state;
    const { client } = this.props;
    const data = {
      routine: {
        title: routine.title,
        exercises: routine.exercises,
        id: routine.id
      },
      client_id: client.id
    };
    this.props.shareRoutine(data);
    this.onClose();
  };

  onOpen = () => {
    this.setState({
      modal: true
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelectRoutine = routine => {
    this.setState({
      routine
    });
  };
  renderLoading() {
    return <Loader />;
  }
  renderPage() {
    const { routines } = this.props;

    const routineList = routines.map((r, i) => {
      const exercises = r.exercises.map((e, t) => {
        return <p key={t}>{e.name}</p>;
      });
      return (
        <div key={i}>
          <h2>Title:{r.title}</h2>
          {exercises}
          <button
            className="ui button positive"
            onClick={() => this.handleSelectRoutine(r)}
          >
            Share
          </button>
        </div>
      );
    });
    return (
      <Modal
        trigger={
          <Button positive onClick={this.onOpen}>
            Share a Routine
          </Button>
        }
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>Pick a Routine To Share</Modal.Header>
        <Modal.Content>{routineList}</Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.onClose}>
            Cancel
          </Button>
          <Button positive onClick={this.handleSubmitRequest}>
            Send Request
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
  render() {
    return this.props.loading ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = ({ routines }) => ({
  loading: routines.loading,
  routines: routines.routines
});

export default connect(mapStateToProps, actions)(ShareRoutineModal);
