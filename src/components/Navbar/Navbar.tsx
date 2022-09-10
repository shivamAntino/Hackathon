import { FC } from "react";
import "./Navbar.scss";
import { INavbarProps } from "./types";

const Navbar: FC<INavbarProps> = ({ children }) => {
  return <div className="navbar">{children}</div>;
};

export default Navbar;
