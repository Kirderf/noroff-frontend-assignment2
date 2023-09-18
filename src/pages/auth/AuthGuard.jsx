import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = (Component) => (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/login" />;
  }else{    
  return  <Component {...props} />;
  }
};
export default AuthGuard;
