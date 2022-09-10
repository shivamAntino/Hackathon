import { Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./components/RouteGuards/PrivateRoute";
import VPDashboard from "./features/dashboard/VPDashboard";
import PMDashboard from "./features/dashboard/PMDashboard";
import UserRecords from "./features/user-record/UserRecords";
import UserProfile from "./features/user-profile/UserProfile";
import PublicRoute from "./components/RouteGuards/PublicRoute";
import Login from "./features/auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          {/* <Route path="dashboard-vp" element={<VPDashboard />} /> */}
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard-vp" element={<VPDashboard />} />
          <Route path="dashboard-pm" element={<PMDashboard />} />
          <Route path="user-records" element={<UserRecords />} />
          <Route path="user-profile" element={<UserProfile />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
