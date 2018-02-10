import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Table, Button } from "semantic-ui-react";

class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  onClose = () => {
    this.setState({
      modal: false
    });
  };
  onOpen = () => {
    this.setState({
      modal: true
    });
  };

  handleAdd = e => {
    this.props.handleSelection(e);
  };
  render() {
    const { exercises, exerciseCategories } = this.props;
    const exercisesToAdd = exercises.map((exercise, index) => {
      const exercise_category = exerciseCategories.find(ec => {
        return ec.id === exercise.exercise_category_id;
      });
      console.log(exercise_category);
      return (
        <Table.Row key={index}>
          <Table.Cell>{exercise.name}</Table.Cell>
          <Table.Cell>{exercise_category.name}</Table.Cell>
          <Table.Cell>{exercise.description}</Table.Cell>
          <Table.Cell>
            <Button onClick={() => this.handleAdd(exercise)}>Add</Button>
          </Table.Cell>
        </Table.Row>
      );
    });

    return (
      <Modal
        trigger={<Button onClick={this.onOpen}>Add Exercises</Button>}
        onClose={this.onClose}
        open={this.state.modal}
      >
        <Modal.Header>Add Exercises</Modal.Header>
        <Modal.Content>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <h4>Exercise</h4>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <h4>Category</h4>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <h4>Description</h4>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{exercisesToAdd}</Table.Body>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.onClose}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  exercises: [
    ...state.exercises.seed_exercises,
    ...state.exercises.user_exercises
  ],
  exerciseCategories: state.exerciseCategories
});

export default connect(mapStateToProps)(AddExercise);
