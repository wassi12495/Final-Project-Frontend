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
  // TODO: Add fetch request
  return;
};

const getCurrentUser = () => {
  return;
};

export const adapter = {
  auth: {
    login,
    getCurrentUser
  },
  users: {
    signup
  }
};
