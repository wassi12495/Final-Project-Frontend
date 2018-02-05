import React from "react";

const RoutineShow = ({ routine }) => {
  console.log(routine);
  return (
    <div>
      <h3>{routine.title}</h3>
    </div>
  );
};

export default RoutineShow;
