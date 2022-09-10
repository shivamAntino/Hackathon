import { FC } from "react";
import { ITopPerformersCard } from "./types";

import "./TopPerformersCard.scss"
import Avatar from "../Avatar/Avatar";
import { defaultUserPic } from "../../constants";

const TopPerformersCard: FC<ITopPerformersCard> = ({
  topPerformers,
  headerText,
  footerText,
}) => {
  return (
    <div className="top-performers-card">
      <p className="top-performers-card-header">{headerText}</p>
      <div className="top-performers-card-body">
      {topPerformers.map(({firstName, designation}, idx) => (
        <div className="top-performer" key={idx}>
          <Avatar src={defaultUserPic} height={idx === 1 ? 100 : 80} width={idx === 1 ? 100 : 80} />
          <p className="top-performer-username">{firstName}</p>
          <p className="top-performer-designation">{designation}</p>
        </div>
      ))}
      </div>
      <p className="top-performers-card-footer">{footerText}</p>
    </div>
  );
};

export default TopPerformersCard;
