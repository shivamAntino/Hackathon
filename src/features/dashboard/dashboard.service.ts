import { axiosInstance } from "../../axios";
import { PMDashboardResponse } from "./types";

const getPMDashboardData = async (payload: any) => {
  try {
    const { id } = payload;
    const { data } = await axiosInstance.get<PMDashboardResponse>(`/api/pm/get/pm/${id}`);
    return { data };
  } catch (e: any) {
    return { error: e.message };
  }
};

const DashboardService = {getPMDashboardData};
export default DashboardService;