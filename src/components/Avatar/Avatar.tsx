import { FC } from "react";
import { IAvatarProps } from "./types";
import "./Avatar.scss";

const Avatar: FC<IAvatarProps> = ({ src, height = 50, width = 50 }) => {
  return (
    <div className="avatar">
      <img
        src={src}
        alt="avatar"
        height={height}
        width={width}
      />
    </div>
  );
};

export default Avatar;
