import { FC } from "react";
import Avatar from "../Avatar/Avatar";
import Navbar from "./Navbar";
import { IDashboardNavbarProps } from "./types";

const DashboardNavbar: FC<IDashboardNavbarProps> = ({
  greeting,
  user: { userName, userPic },
}) => {
  return (
    <Navbar>
      <div className="dashboard-navbar-title">
        <Avatar src={userPic} />
        <div className="dashboard-navbar-title-greeting">
          <p className="dashboard-navbar-title-greeting-message">{greeting}</p>
          <p className="dashboard-navbar-title-greeting-username">{userName}</p>
        </div>
      </div>
    </Navbar>
  );
};

export default DashboardNavbar;
