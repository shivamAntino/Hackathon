import { Navigate, Outlet } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuthInfo();
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
