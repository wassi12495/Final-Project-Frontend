import React from "react";
import LoginForm from "./LoginForm";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

const LoginContainer = ({ loading }) => {
  return (
    <div className="login-form">
      <style>{`
     body > div,
     body > div > div,
     body > div > div > div.login-form {
       height: 100%;
     }
   `}</style>
      <LoginForm />
    </div>
  );
};

export default LoginContainer;
