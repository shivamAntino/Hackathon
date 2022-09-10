import "./auth.scss";
import { useState } from "react";
import SelectionCard from "./SelectionCard";
// import logo from "../../assets/images/avatarman.png";
import "../../assets/images/avatarman.png";

const Login = () => {
  const [activeuser, setActiveUser] = useState(false);
  const [activepm, setActivePm] = useState(false);
  const [activeVP, setActiveVp] = useState(false);
  const handlePmSelection = () => {
    setActivePm(!activepm);
    setActiveVp(false);
  };
  const handleVpSelection = () => {
    setActiveVp(!activeVP);
    setActivePm(false);
  };
  return (
    <>
      <div className="login_container">
        <div className="left_container">
          <div className="heading">
            <h1>Welcome</h1>
          </div>
          <div className="para">
            <p>Manage your Employee and rates them</p>
          </div>
        </div>
        <div className="right_container">
          <div className="login_header">
            <h1 className="haedig">Login As</h1>
            <p className="heading_text">
              please select your role and login below using your credentials
            </p>
          </div>
          <div className="login_card_container">
            <div className="card_left" onClick={() => handlePmSelection()}>
              <SelectionCard
                src="../../assets/images/avatarman.png"
                title="VP operation"
                active={activepm}
              />
            </div>
            <div className="card_right" onClick={() => handleVpSelection()}>
              <SelectionCard
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                title="VP operation"
                active={activeVP}
              />
            </div>
          </div>
          <div className="form">
            <div className="input_field">
              <input type="text" placeholder="enter your email" />
            </div>
            <div className="input_field">
              <input type="text" placeholder="enter ypur password" />
            </div>
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
