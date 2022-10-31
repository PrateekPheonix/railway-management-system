import { useSelector } from "react-redux";
import { useState } from "react";
import * as api from "../../api";

const ChangePassword = () => {
  const user = useSelector((state) => state.user);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const createSubmit = (e) => {
    e.preventDefault();
    const res = api.changePassword(password, newPassword);
    // console.log(res);
    setPassword("");
    setNewPassword("");
    if (res.status === 200) {
      alert("Password changed");
    }
  };

  if (user.name) {
    return (
      <div className="admin-container">
        <h1 className="heading">Change Password</h1>
        <form className="create-train-form">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Current Password"
            type="password"
            required
          />
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            placeholder="New Password"
            type="password"
            required
          />
          <button onClick={createSubmit}>Submit</button>
        </form>
      </div>
    );
  }
};

export default ChangePassword;
