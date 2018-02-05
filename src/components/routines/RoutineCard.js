import React from "react";

const RoutineCard = ({ routine }) => {
  console.log("Routine Card", routine);
  return (
    <div>
      <p>{routine.title} </p>
    </div>
  );
};

export default RoutineCard;
