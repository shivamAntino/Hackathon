export interface AuthState {
  token: string;
  userType: UserType;
}

export interface LoginCreds {
  email: string;
  password: string;
}

export type UserType = "VP" | "PM" | null;
