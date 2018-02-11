const API_URL = "http://localhost:3000/api/v1";

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};
const signup = user => {
  return fetch(`${API_URL}/users`, {
    method: "POST",
    headers,
    body: JSON.stringify(user)
  }).then(res => res.json());
};

const login = user => {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(user)
  }).then(res => res.json());
};

const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/current_user`, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const createRoutine = routine => {
  console.log("Create Routine", routine);
  return fetch(`${API_URL}/routines`, {
    method: "POST",
    headers,
    body: JSON.stringify(routine)
  }).then(res => res.json());
};

const getRoutines = () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/routines`, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getExCas = () => {
  return fetch(`${API_URL}/exercise_categories`, {
    method: "GET"
  }).then(res => res.json());
};

const getWorkouts = () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/current_user/workouts`, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getExercises = () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/exercises`, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const addExercise = data => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/exercises`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const initializeWorkout = data => {
  console.log("Initialize Workout", data);

  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/current_workouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const getCurrentWorkout = () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/current_workouts`, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const addExerciseToCurrentWorkout = data => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/current_workouts/add_exercise`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const completeCurrentWorkout = data => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/workouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const deleteCurrentWorkout = id => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/current_workouts/${id}`, {
    method: "DELETE",
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getClients = () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/current_user/clients`, {
    headers: { Authorization: token }
  }).then(res => res.json());
};
export const adapter = {
  auth: {
    login,
    getCurrentUser,
    getWorkouts
  },
  user: {
    signup
  },
  routines: {
    createRoutine,
    getRoutines
  },
  exercises: {
    getExCas,
    getExercises,
    addExercise
  },
  workouts: {
    initializeWorkout,
    getCurrentWorkout,
    completeCurrentWorkout,
    addExerciseToCurrentWorkout,
    deleteCurrentWorkout
  },
  clients: {
    getClients
  }
};
