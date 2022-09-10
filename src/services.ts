import { LoginResponse } from "./features/auth/types";

export const adminInfoGetterService = () => {
  const token = localStorage.getItem("pro-coders-token") || "";
  const role = localStorage.getItem("pro-coders-role") || "";
  const id = localStorage.getItem("pro-coders-id") || "";
  return { token, role, id } as LoginResponse;
};
export const adminInfoSetterService = (payload: LoginResponse) => {
  localStorage.setItem("pro-coders-role", payload.role || "");
  localStorage.setItem("pro-coder-token", payload.token);
  localStorage.setItem("pro-coder-id", payload.id);
};
export const adminInfoRemovalService = () => {
  localStorage.removeItem("pro-coders-token");
  localStorage.removeItem("pro-coders-role");
  localStorage.removeItem("pro-coders-id");
};
