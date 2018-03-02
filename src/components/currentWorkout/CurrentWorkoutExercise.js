import React, { Component } from "react";
import { Table, Button, Card, Icon } from "semantic-ui-react";

class CurrentWorkoutExercise extends Component {
  componentWillMount = () => {
    const { exercise, index } = this.props;
    this.setState({
      name: exercise.name,
      description: exercise.description,
      sets: exercise.sets,
      measure: exercise.measure,
      index
    });
  };

  componentWillReceiveProps(nextProps) {
    const { exercise } = nextProps;
    this.setState({
      sets: exercise.sets,
      measure: exercise.measure
    });
  }

  handleMeasureInput = (input, i) => {
    const { exercise, update } = this.props;
    const { measure, index } = this.state;

    const newM = [...measure.slice(0, i), input, ...measure.slice(i + 1)];
    const newE = Object.assign({}, exercise, {
      measure: newM
    });
    debugger;
    // this.props.handleChangeMeasure(e, exercise);
  };
  handleRepsInput = e => {
    // this.props.handleChangeReps(e, exercise);
  };
  handleDeleteRow = e => {
    // this.props.handleDeleteSet(e, exercise);
  };

  // renderSetRows() {
  //   return measure.map((m, i) => {
  //     return (
  //       <RoutineExerciseSet
  //         index={i}
  //         key={i}
  //         set={i + 1}
  //         measure={m}
  //         handleMeasureInput={this.handleMeasureInput}
  //         handleDelete={this.handleDeleteRow}
  //       />
  //     );
  //   });
  // }

  render() {
    const { exercise } = this.props;
    const rows = "hi";
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{exercise.name}</Card.Header>
          <Card.Description>
            <Table collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="2">
                    {exercise.name}
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <Button
                      negative
                      onClick={() => this.props.handleRemoveExercise(exercise)}
                    >
                      Remove Exercise
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Sets</Table.HeaderCell>
                  <Table.HeaderCell>Reps</Table.HeaderCell>
                  <Table.HeaderCell>{exercise.measure}</Table.HeaderCell>
                  <Table.HeaderCell>
                    <Icon
                      circular
                      inverted
                      name="plus"
                      color="green"
                      onClick={() => this.props.handleClick(exercise)}
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{rows}</Table.Body>
            </Table>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
//
// const CurrentWorkoutExercise = ({
//   exercise,
//   handleClick,
//   handleChangeMeasure,
//   handleChangeReps,
//   handleDeleteSet,
//   handleRemoveExercise
// }) => {
//   const rows = [];
//   for (let i = 0; i < exercise.sets; i++) {
//     rows.push(
//       <Table.Row key={i}>
//         <Table.Cell>Set {i + 1}</Table.Cell>
//         <Table.Cell>
//           <div className="ui input">
//             {exercise.reps.length === 0 ? (
//               <label>N/A</label>
//             ) : (
//               <input
//                 type="text"
//                 name={i}
//                 value={exercise.reps[i]}
//                 onChange={handleRepsInput}
//               />
//             )}
//           </div>
//         </Table.Cell>
//         <Table.Cell>
//           <div className="ui input">
//             {exercise.measure === "N/a" ? null : (
//               <input name={i} type="text" onChange={handleMeasureInput} />
//             )}
//           </div>
//           <button
//             className="small negative floated right"
//             onClick={() => handleDeleteRow(i)}
//           >
//             <i className="minus icon" />
//           </button>
//         </Table.Cell>
//       </Table.Row>
//     );
//   }
// };

export default CurrentWorkoutExercise;
