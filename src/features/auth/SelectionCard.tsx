import { FC } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { ISelectionCard } from "./types";
import "./auth.scss";

// import avatarman from "../../assets/images/avatarman;
// interface srcprops {
//   src: string;
//   height?: number;
//   width?: number;
// }

const SelectionCard = ({
  src,
  title,
  active,
}: {
  src: string;
  title: string;
  active: boolean;
}) => {
  return (
    <div className={active ? "card_container_toggle" : "card_container"}>
      <div className="avatar_container">
        <Avatar src={src} />
      </div>
      <div className="card_text">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SelectionCard;
