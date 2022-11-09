import { useState } from "react";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";
import "./Login.css";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (e) => {
    e.preventDefault();
    setForm({
      email: e.target.value,
      password: form.password,
    });
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setForm({
      email: form.email,
      password: e.target.value,
    });
  };

  const onsubmit = (e) => {
    console.log("HR")
    e.preventDefault();
    dispatch(login(form.email, form.password));
    setForm({
      email: "",
      password: "",
    });
    console.log("HR")
    history.push('/')
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h3>Login</h3>
        <input
          value={form.email}
          onChange={onEmailChange}
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={form.password}
          onChange={onPasswordChange}
          type="password"
          placeholder="Password"
          required
        />
        <button onSubmit={onsubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
