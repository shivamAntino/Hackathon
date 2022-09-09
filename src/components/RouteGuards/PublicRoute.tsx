import { Navigate, Outlet } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";

export const PublicRoute = () => {
  const {isAuthenticated, userType} = useAuthInfo();
  const respectiveDashboard = userType === "VP" ?  "/dashboard-vp" : userType === "PM" ? "/dashboard-pm" : "/login"
  return !isAuthenticated ? <Outlet /> : <Navigate to={respectiveDashboard} />;
};

export default PublicRoute;
