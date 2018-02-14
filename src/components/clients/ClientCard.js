import React from "react";
import ShareRoutineModal from "./ShareRoutineModal";

const ClientCard = ({ client }) => {
  const name = `${client.first_name} ${client.last_name}`;

  const workouts = client.workouts.map((workout, index) => {
    const exercises = workout.exercises.map((e, index) => {
      return <div key={index}>{e.name}</div>;
    });
    return (
      <div key={index}>
        <h5>
          {workout.title} - {workout.time_of_workout}
        </h5>
        {exercises}
      </div>
    );
  });
  return (
    <div>
      <h2> {name}</h2>
      <ShareRoutineModal client={client} />
      <h4>Recent Workouts</h4>
      {workouts}
    </div>
  );
};

export default ClientCard;
