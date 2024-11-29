import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="logo">
        <Link
          className="text-2xl font-bold text-black hover:scale-110 transition-transform"
          to="/">
          Aayush
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links flex gap-6">
        <div className="nav-item">
          <Link
            className="text-lg text-black font-medium hover:text-[#2f4f4f] hover:scale-110 transition-transform"
            to="/">
            Hero
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className="text-lg text-black font-medium hover:text-[#2f4f4f] hover:scale-110 transition-transform"
            to="/resume">
            Resume
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className="text-lg text-black font-medium hover:text-[#2f4f4f] hover:scale-110 transition-transform"
            to="/photography">
            Photography
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
