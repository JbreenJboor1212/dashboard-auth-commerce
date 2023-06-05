import { useContext } from "react";
import { Data } from "../../context/Context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(Data);
  const location = useLocation();
  return context.auth.userDetails ? (
    <Outlet />
  ) : (
    <Navigate state={{from :location}} replace to="/login" /> 
  );
};

export default RequireAuth;

