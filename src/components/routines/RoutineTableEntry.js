import React from "react";

const RoutineTableEntry = ({ exercise }) => {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.sets}</td>
    </tr>
  );
};

export default RoutineTableEntry;
