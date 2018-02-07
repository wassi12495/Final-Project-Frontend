import React from "react";
import { connect } from "react-redux";

const AddExercise = ({ exercises, handleSelection }) => {
  const handleAdd = e => {
    handleSelection(e);
  };
  const exercisesToAdd = exercises.map((exercise, index) => {
    return (
      <tr key={index}>
        <td>{exercise.name}</td>
        <td>{exercise.exercise_category.name}</td>
        <td>{exercise.description}</td>
        <td>
          <button onClick={() => handleAdd(exercise)}>Add</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              <h4>Exercise</h4>
            </th>
            <th>
              <h4>Category</h4>
            </th>
            <th>
              <h4>Description</h4>
            </th>
          </tr>
          {exercisesToAdd}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  exercises: state.exercises
});

export default connect(mapStateToProps)(AddExercise);
