import { adminInfoRemovalService } from "../../services";
import { useAppDispatch } from "../../store";
import { logout } from "../auth/auth.slice";

const VPDashboard = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div>VPDashboard</div>
      <button onClick={() => handleLogout()}>logout</button>
    </>
  );
};

export default VPDashboard;
