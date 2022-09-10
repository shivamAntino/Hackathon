import { Employee } from "../../features/dashboard/types";

export interface ITopPerformersCard {
  topPerformers: Employee[];
  headerText: string;
  footerText: string;
}

export interface TopPerformer {
  userName: string;
  userDesignation: string;
  userPic: string;
  rating: number;
}
