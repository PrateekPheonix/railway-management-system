import "./Signup.css";
import { useState } from "react";
import { register } from "../../api";
import {useHistory} from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const nameChange = (e) => {
    e.preventDefault();
    setFields({
      name: e.target.value,
      email: fields.email,
      phone: fields.phone,
      password: fields.password,
      confirm: fields.confirm,
    });
  };

  const emailChange = (e) => {
    e.preventDefault();
    setFields({
      name: fields.name,
      email: e.target.value,
      phone: fields.phone,
      password: fields.password,
      confirm: fields.confirm,
    });
  };

  const phoneChange = (e) => {
    e.preventDefault();
    setFields({
      name: fields.name,
      email: fields.email,
      phone: e.target.value,
      password: fields.password,
      confirm: fields.confirm,
    });
  };

  const passwordChange = (e) => {
    e.preventDefault();
    setFields({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      password: e.target.value,
      confirm: fields.confirm,
    });
  };

  const confirmChange = (e) => {
    e.preventDefault();
    setFields({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      password: fields.password,
      confirm: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (fields.password === fields.confirm) {
      register(fields.name, fields.email, fields.password, fields.phone);
      setFields({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirm: "",
      });
    history.push('/login');
    } else {
      console.log("passwords don't match");
    }
  };

  return (
    <div>
      <form className="signup-form">
      <h3>Sign-Up</h3>
      <input
        value={fields.name}
        onChange={nameChange}
        type="text"
        placeholder="Name"
        required
      />
      <input
        value={fields.email}
        onChange={emailChange}
        type="text"
        placeholder="Email"
        required
      />
      <input
        value={fields.phone}
        onChange={phoneChange}
        type="text"
        placeholder="Phone No"
        required
      />
      <input
        value={fields.password}
        onChange={passwordChange}
        type="password"
        placeholder="Password"
        required
      />
      <input
        value={fields.confirm}
        onChange={confirmChange}
        type="password"
        placeholder="Confirm Password"
        required
      />
      <button onSubmit={onSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Signup;