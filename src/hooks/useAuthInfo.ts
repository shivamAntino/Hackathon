import { useSelector } from "react-redux";

import { RootState } from "../store";

const useAuthInfo = () => {
  const { token, userType } = useSelector((state: RootState) => state.auth);
  return { isAuthenticated: token, userType };
};

export default useAuthInfo;
