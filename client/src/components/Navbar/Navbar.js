import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="parent-container">
      <div className="navbar-container">
        <nav className="navbar">
          <ul className="nav-list">
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/login">
              <h3>Login</h3>
            </Link>
            <Link to="/signup">
              <h3>Sign Up</h3>
            </Link>
          </ul>
        </nav>
      </div>
      <hr className="nav-divider" />
    </div>
  );
};

export default Navbar;
