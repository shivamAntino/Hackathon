import { Loading } from "../auth/types";

export interface DashboardState {
  employees: Employee[];
  pmData: Employee | null;
  loading: Loading;
  error: string;
}

export interface PMDashboardResponse {
  empData: Employee[];
  pmData: Employee;
}

export interface Employee {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
}
