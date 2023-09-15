import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = (Component) => (props) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  function login() {
    setIsAuthenticated(true);
  }
  function logout() {
    setIsAuthenticated(false);
  }
  return isAuthenticated ? (
    <Component {...props} login={login} logout={logout} />
  ) : (
    <Navigate to="/login" state={{ from: props.location }} />
  );
};

export default AuthGuard;
