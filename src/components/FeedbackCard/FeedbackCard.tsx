import { FC } from "react";

import Card from "../Card/Card";
import Avatar from "../Avatar/Avatar";
import Feedback from "../Feedback/Feedback";
import Button from "../Button/Button";

import { IFeedbackCardProps } from "./types";

import "./FeedbackCard.scss";

const FeedbackCard: FC<IFeedbackCardProps> = ({
  userName,
  userDesignation,
  userPic,
  feedbacks,
  overAllFeedback = "",
  isPending,
}) => {
  return (
    <Card className="feedback-card">
      <div className="feedback-card-user-info">
        <div className="feedback-card-user-info-pic">
          <Avatar src={userPic} />
        </div>
        <div className="feedback-card-user-info-details">
          <p className="feedback-card-user-info-details-username">{userName}</p>
          <p className="feedback-card-user-info-details-designation">
            {userDesignation}
          </p>
        </div>
      </div>
      <div className="feedback-card-feedbacks">
        {feedbacks.map((feedback, idx) => (
          <Feedback feedback={feedback} key={idx} />
        ))}
      </div>
      <div className="feedback-card-footer">
        {isPending ? <Button>Rate Now</Button> : <p>{overAllFeedback}</p>}
      </div>
    </Card>
  );
};

export default FeedbackCard;
