import { FC } from "react";
import { IButtonProps } from "./types";
import "./Button.scss"

const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button {...rest} className={`btn ${variant}-btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
