export interface AuthState {
  token: string;
  userType: UserType;
  id : string;
  error: string;
  loading: Loading;
  selectedRole: UserType;
}

export type Loading = "idle" | "loading" | "failed" | "succeeded";

export interface LoginCreds {
  username: string;
  password: string;
}

export type UserType = "VP" | "PM" | null;

export interface ISelectionCard {
  src: string;
}

export interface LoginResponse {
  status: string;
  token: string;
  role: UserType;
  id : string;
}
