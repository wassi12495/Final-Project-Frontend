import React from "react";
import withAuth from "../../hocs/withAuth";

const Profile = props => {
  return <h1>Profile page</h1>;
};

export default withAuth(Profile);
