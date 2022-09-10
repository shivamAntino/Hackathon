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
    alert("invalid credentials");
    return { error: e.message as string };
  }
};

const AuthService = { login };

export default AuthService;
