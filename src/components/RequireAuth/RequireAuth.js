import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const {data} = useSelector((state) => state.user)
  let location = useLocation();
  // const [user] = useAuthState(auth);
  if (!data) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
