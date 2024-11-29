import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar flex items-center fixed top-5 w-full z-50 px-10">
      {/* Logo/Icon on the Left */}
      <div className="logo">
        <Link
          to="/"
          className="text-2xl text-black hover:text-[#2f4f4f] transition-transform"
          title="Home">
          <FontAwesomeIcon icon={faCode} />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links flex gap-8 ml-auto">
        <div className="nav-item">
          <Link
            className="text-xl font-semibold text-black hover:text-[#2f4f4f] hover:scale-110 transition-transform"
            to="/">
            Hero
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className="text-xl font-semibold text-black hover:text-[#2f4f4f] hover:scale-110 transition-transform"
            to="/resume">
            Resume
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className="text-xl font-semibold text-black hover:text-[#2f4f4f] hover:scale-110 transition-transform"
            to="/photography">
            Photography
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
