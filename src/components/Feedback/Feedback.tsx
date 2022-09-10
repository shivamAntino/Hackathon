import { FC } from "react";
import { IFeedbackProps } from "./types";
import "./Feedback.scss";

const Feedback: FC<IFeedbackProps> = ({ feedback: { name, value } }) => {
  const renderFeedbackRating = (rating: number) => {
    const nodes = [];
    for (let i = 0; i < 6; i++) {
      if (i <= rating) {
        nodes.push(<span className="feedback-rating-filled"></span>);
      } else {
        nodes.push(<span className="feedback-rating-empty"></span>);
      }
    }
    return nodes;
  };
  return (
    <div className="feedback">
      <p className="feedback-label">{name}</p>
      <div className="feedback-rating">
        {value === null ? <p className="feedback-rating-pending">Pending</p> : renderFeedbackRating(value)}
      </div>
    </div>
  );
};

export default Feedback;
