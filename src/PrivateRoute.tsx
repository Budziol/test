import React from "react";
import { Navigate } from "react-router";
import Loader from "./Components/Loader";
// import { PrivateRouteProps } from "./types";

const PrivateRoute = ({ user, children, isLoading }: any) => {
  return isLoading ? <Loader /> : user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
