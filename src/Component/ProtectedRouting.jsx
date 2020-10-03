import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouting = ({ children, ...rest }) => {
  const [auth, setAuth] = React.useState(false);
  return (
    <div>
      <Route {...rest}> {auth ? children : <Redirect tp="/login" />}</Route>
    </div>
  );
};

export default ProtectedRouting;
