import axios from "axios";
import { axiosInstance } from "../../axios";

import { LoginCreds, LoginResponse, UserType } from "./types";

const login = async (payload: LoginCreds, userType: UserType) => {
  try {
    const { data } = await axiosInstance.post<LoginResponse>(
      `/api/user/${userType}/login`,
      { ...payload, username: payload.username }
    );
    return { data };
  } catch (e: any) {
    if (e.message) {
      alert(e.message);
    } else {
      alert("invalid credentials");
    }
    // alert((e.message && e.message) || "invalid data");
    return { error: e.message as string };
  }
};

const AuthService = { login };

export default AuthService;
