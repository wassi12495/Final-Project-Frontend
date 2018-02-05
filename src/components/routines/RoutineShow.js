import React from "react";
import RoutineTableEntry from "./RoutineTableEntry";

const RoutineShow = ({ routine }) => {
  console.log(routine);
  const exercises = routine.exercises.map((e, index) => {
    console.log(e);
    return <RoutineTableEntry exercise={e} key={index} />;
  });
  return (
    <div>
      <h3>{routine.title}</h3>
      <table>
        <tbody>
          <tr>
            <th>
              <h3> Exercise</h3>
            </th>
            <th>
              <h3>Sets</h3>
            </th>
            <th>
              <h3>Category</h3>
            </th>
          </tr>
          {exercises}
        </tbody>
      </table>
    </div>
  );
};

export default RoutineShow;
