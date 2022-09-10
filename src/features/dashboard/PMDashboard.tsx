import { useEffect } from "react";
import { useSelector } from "react-redux";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import TopPerformersCard from "../../components/TopPerformersCard/TopPerformersCard";
import { TopPerformer } from "../../components/TopPerformersCard/types";
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

const feedbacks = [
  {
    userName: "Noor",
    userDesignation: "Frontend developer",
    userPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",

    overAllFeedback: "",
    isPending: false,
    feedbacks: [
      { name: "Performance", value: 4 },
      { name: "Punctuality", value: 5 },
    ],
  },
  {
    userName: "Gaurav",
    userDesignation: "Backend developer",
    userPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",

    overAllFeedback: "",
    isPending: false,
    feedbacks: [
      { name: "Performance", value: 3 },
      { name: "Punctuality", value: 2 },
    ],
  },
  {
    userName: "Abinash",
    userDesignation: "UI Designer",
    userPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",

    overAllFeedback: "",
    isPending: true,
    feedbacks: [
      { name: "Performance", value: null },
      { name: "Punctuality", value: null },
    ],
  },
  {
    userName: "Abinash",
    userDesignation: "UI Designer",
    userPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",

    overAllFeedback: "",
    isPending: true,
    feedbacks: [
      { name: "Performance", value: null },
      { name: "Punctuality", value: null },
    ],
  },
  {
    userName: "Abinash",
    userDesignation: "UI Designer",
    userPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",

    overAllFeedback: "",
    isPending: true,
    feedbacks: [
      { name: "Performance", value: null },
      { name: "Punctuality", value: null },
    ],
  },
];

const PMDashboard = () => {
  const dispatch = useAppDispatch();
  const { pmData } = useSelector((state: RootState) => state.dashboard);

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
            topPerformers={topPerformers}
            headerText="Top Performers last week"
            footerText="Well Done You guys did a great job"
          />
        </div>
        <div className="dashboard-body-feedbacks">
          {feedbacks.map((feedback) => (
            <FeedbackCard {...feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PMDashboard;
