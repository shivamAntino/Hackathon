import { FC } from "react";
import { IFeedbackProps } from "./types";
import "./Feedback.scss";
import StarRatings from "react-star-ratings";

const Feedback: FC<IFeedbackProps> = ({ feedback: { name, value } }) => {
  return (
    <div className="feedback">
      <p className="feedback-label">{name}</p>
      <div className="feedback-rating">
        {value === null ? (
          <p className="feedback-rating-pending">Pending</p>
        ) : (
          <StarRatings
            rating={+value}
            numberOfStars={5}
            starRatedColor="rgba(255, 212, 58, 1)"
            starEmptyColor="rgba(224, 224, 224, 1)"
            starHoverColor="rgba(255, 212, 58, 1)"
            starDimension="12"
            starSpacing="1"
            name="rating"
          />
        )}
      </div>
    </div>
  );
};

export default Feedback;
