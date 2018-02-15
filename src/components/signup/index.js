import React from "react";
import SignupForm from "./SignupForm";
import { Grid } from "semantic-ui-react";
const SignupContainer = () => {
  return (
    <div className="signup-form">
      <style>{`
     body > div,
     body > div > div,
     body > div > div > div,
     body > div > div > div > div.signup-form {
       height: 100%;
     }
   `}</style>
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <SignupForm />
      </Grid>
    </div>
  );
};

export default SignupContainer;
