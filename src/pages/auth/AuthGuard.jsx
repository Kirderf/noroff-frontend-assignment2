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
    <Component {...props} />
  ) : (
    <Navigate to="/login" state={{ from: props.location }} />
  );
};

export default AuthGuard;
