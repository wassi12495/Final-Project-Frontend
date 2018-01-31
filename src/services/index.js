const API_URL = "http://localhost:3000/api/v1";

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};

const login = user => {
  // TODO: Add fetch request
  return;
};

export const adapter = {
  auth: {
    login,
    getCurrentUser
  }
};
