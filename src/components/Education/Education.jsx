import React from "react";
import "./Education.css";
import gatech from "../../assets/gatech.png";
import uga from "../../assets/uga.png";
function Education() {
  return (
    <>
      <div className="education-container">
        <h1 className="education-title">Education</h1>
        <div className="education-content">
          <div className="education-left-container">
            <img className="ga-tech-logo" src={gatech}></img>
            <h1 className="ga-tech-title">Georgia Institute of Technology</h1>
            <h2 className="ga-tech-major"> BS Computational Media</h2>
          </div>
          <div className="education-right-container">
            <img className="uga-logo" src={uga}></img>
            <h1 className="uga-title">University of Georgia</h1>
            <h2 className="uga-major">BS Computer Science</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
