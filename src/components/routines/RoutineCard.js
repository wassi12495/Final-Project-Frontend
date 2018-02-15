import React from "react";
import { Card } from "semantic-ui-react";

const RoutineCard = ({ routine, handleClick }) => {
  return (
    <Card onClick={() => handleClick(routine)}>
      <h3>{routine.title} </h3>
    </Card>
  );
};

export default RoutineCard;
