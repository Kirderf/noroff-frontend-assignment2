import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { setUser } from "../../store/userSlice";

import { useEffect } from "react";

const AuthGuard = (Component) => (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, []);

  if (!user.username) {
    return <Navigate to="/login" />;
  } else {
    return <Component {...props} />;
  }
};
export default AuthGuard;
