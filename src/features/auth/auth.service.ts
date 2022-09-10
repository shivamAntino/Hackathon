import axios from "axios";
import { axiosInstance } from "../../axios";

import { LoginCreds, LoginResponse } from "./types";

const login = async (payload: LoginCreds) => {
  try {
    const { data } = await axiosInstance.post<LoginResponse>(
      "/api/user/login",
      payload
    );
    return { data };
  } catch (e: any) {
    return { error: e.message as string };
  }
};

const AuthService = { login };

export default AuthService;
