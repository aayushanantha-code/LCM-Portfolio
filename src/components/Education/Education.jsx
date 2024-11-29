import React from "react";
import "./Education.css";
import gatech from "../../assets/gatech.png";
import uga from "../../assets/uga.png";

function Education() {
  return (
    <div className="education-container bg-tan h-screen flex flex-col justify-center items-center">
      {/* Title */}
      <h1 className="education-title text-6xl lg:text-8xl font-extrabold font-serif text-black mb-10">
        Education
      </h1>

      {/* Content */}
      <div className="education-content flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 w-full px-[5vw]">
        {/* Georgia Tech */}
        <div className="education-left-container flex flex-col items-center">
          <img
            className="ga-tech-logo rounded-lg"
            src={gatech}
            alt="Georgia Tech"
          />
          <h1 className="ga-tech-title text-2xl lg:text-3xl font-bold text-black mt-4">
            Georgia Institute of Technology
          </h1>
          <h2 className="ga-tech-major text-xl lg:text-2xl text-gray-700">
            BS Computational Media
          </h2>
        </div>

        {/* University of Georgia */}
        <div className="education-right-container flex flex-col items-center">
          <img
            className="uga-logo rounded-lg"
            src={uga}
            alt="University of Georgia"
          />
          <h1 className="uga-title text-2xl lg:text-3xl font-bold text-black mt-4">
            University of Georgia
          </h1>
          <h2 className="uga-major text-xl lg:text-2xl text-gray-700">
            BS Computer Science
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Education;
