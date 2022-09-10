import "./auth.scss";
import { useState } from "react";
import SelectionCard from "./SelectionCard";
import { useDispatch } from "react-redux";
import { login, toggleSelectedRole } from "./auth.slice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
// import logo from "../../assets/images/avatarman.png";
// import "../../assets/images/avatarman.png";

const Login = () => {
  const dispatch = useAppDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [activepm, setActivePm] = useState(false);
  const [activeVP, setActiveVp] = useState(false);
  const { selectedRole } = useSelector((state: RootState) => state.auth);
  const handlePmSelection = () => {
    setActivePm(!activepm);
    setActiveVp(false);
    dispatch(toggleSelectedRole("pm"));
  };
  const handleVpSelection = () => {
    setActiveVp(!activeVP);
    setActivePm(false);
    dispatch(toggleSelectedRole("vp"));
  };
  const handleSubmit = () => {
    console.log("hii");
    const response = {
      username: id,
      password: password,
    };
    dispatch(login(response));
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
                src="https://www.w3schools.com/howto/img_avatar.png"
                title="PM operation"
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
              <input
                type="text"
                placeholder="Enter your Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Enter ypur password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn">
              <button onClick={() => handleSubmit()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
