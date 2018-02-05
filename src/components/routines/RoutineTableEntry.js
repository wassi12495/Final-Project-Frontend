import React from "react";

const RoutineTableEntry = ({ exercise }) => {
  return (
    <tr>
      <td>{exercise.name}</td>
    </tr>
  );
};

export default RoutineTableEntry;
