import { useEffect } from "react";
import { useSelector } from "react-redux";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import TopPerformersCard from "../../components/TopPerformersCard/TopPerformersCard";
import { TopPerformer } from "../../components/TopPerformersCard/types";
import { defaultUserPic } from "../../constants";
import { RootState, useAppDispatch } from "../../store";

import "./dashboard.scss";
import { getPMDashboardData } from "./dashboard.slice";

const topPerformers: TopPerformer[] = [
  {
    userName: "Noor",
    userDesignation: "Frontend developer",
    userPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 2,
  },
  {
    userName: "Gaurav",
    userDesignation: "Backend developer",
    userPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 5,
  },
  {
    userName: "Abinash",
    userDesignation: "UI Designer",
    userPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4,
  },
];


const PMDashboard = () => {
  const dispatch = useAppDispatch();
  const { pmData, employees, top3Employees } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => {
    dispatch(getPMDashboardData());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <DashboardNavbar
        greeting="Good Morning"
        user={{
          userName: pmData?.firstName || "",
          userPic:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        }}
      />
      <div className="dashboard-body">
        <div className="dashboard-body-top-card">
          <TopPerformersCard
            topPerformers={top3Employees}
            headerText="Top Performers last week"
            footerText="Well Done You guys did a great job"
          />
        </div>
        <div className="dashboard-body-feedbacks">
          {employees.map((employee, idx) => (
            <FeedbackCard key={idx} userName={employee.firstName} userDesignation={employee.designation} userPic={defaultUserPic} feedbacks={employee.performanceArr} isPending={employee.isPending}   />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PMDashboard;
