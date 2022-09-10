import React from "react";
import Avatar from "../Avatar/Avatar";
import "./profilecard.scss";

const Profilecard = ({
  src,
  heading,
  title,
  rating,
}: {
  src: string;
  heading: string;
  title: string;
  rating?: string;
}) => {
  return (
    <div className="card_container">
      <div className="avatar">
        <Avatar src={src} />
      </div>
      <div className="heading">
        <h3 className="headingtext">{heading}</h3>
      </div>
      <div className="text">
        <p className="text_content">{title}</p>
        <p className="text_content">Rating:{rating}</p>
      </div>
    </div>
  );
};

export default Profilecard;
