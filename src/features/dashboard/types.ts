import { Feedback } from "../../components/FeedbackCard/types";
import { Loading, UserType } from "../auth/types";

export interface DashboardState {
  employees: Employee[];
  top3Employees : Employee[];
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
  performanceArr: Feedback[]
  role : UserType;
  designation : string;
  isPending : boolean;
}
