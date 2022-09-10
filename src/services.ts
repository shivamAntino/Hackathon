import { LoginResponse } from "./features/auth/types";

export const adminInfoGetterService = () => {
  const token = localStorage.getItem("pro-coders-token") || "";
  const role = localStorage.getItem("pro-coders-role") || "";
  return { token, role } as LoginResponse;
};
export const adminInfoSetterService = (payload: LoginResponse) => {
  localStorage.setItem("pro-coders-role", payload.role || "");
  localStorage.setItem("pro-coder-token", payload.token);
};
export const adminInfoRemovalService = () => {
  localStorage.removeItem("pro-coders-token");
  localStorage.removeItem("pro-coders-role");
};
