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

export const adapter = {
  auth: {
    login,
    getCurrentUser
  },
  users: {
    signup
  },
  routines: {
    createRoutine
  }
};
