import React from "react";
import SignupForm from "./SignupForm";
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

      <SignupForm />
    </div>
  );
};

export default SignupContainer;
