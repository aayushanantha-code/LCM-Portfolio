import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav className="links">
          <a href="#">Home</a>
          <a href="#">Education</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
