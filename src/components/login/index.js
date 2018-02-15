import React from "react";
import LoginForm from "./LoginForm";

const LoginContainer = ({ loading }) => {
  return (
    <div className="login-form">
      <style>{`
     body > div,
     body > div > div,
     body > div > div > div,
     body > div > div > div > div.login-form {
       height: 100%;
     }
   `}</style>
      <LoginForm />
    </div>
  );
};

export default LoginContainer;
