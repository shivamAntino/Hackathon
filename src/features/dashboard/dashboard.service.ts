import { axiosInstance } from "../../axios";
import { Employee, PMDashboardResponse } from "./types";

const getFormattedData = (data: any) => {
  const empData = data.empData.map((item: any) => {
    const feedback = item.feedback.map(
      (fb: any) => fb.month.week[0].performance[0]
    );
    console.log({feedback})
    return { ...item, feedback : feedback } as Employee;
  });
  return { empData, pmData: data.pmData };
};

const getPMDashboardData = async (payload: any) => {
  try {
    const { id } = payload;
    const { data } = await axiosInstance.get<PMDashboardResponse>(
      `/api/pm/get/pm/${id}`
    );
    return { data };
  } catch (e: any) {
    return { error: e.message };
  }
};

const DashboardService = { getPMDashboardData };
export default DashboardService;
