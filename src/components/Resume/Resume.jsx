import React, { useState } from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import "./Resume.css";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [projectData, setProjectData] = useState(false);

  return (
    <div className="resume-section">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center bg-tan h-screen">
        <h1 className="text-6xl lg:text-8xl font-extrabold font-serif text-black">
          Resume
        </h1>
      </div>

      {/* Fixed Title and Tabs */}
      <div className="resume-fixed-container sticky top-0 bg-complementary z-50">
        <div className="resume-title-container text-center"></div>
        <div className="resume-select mt-4">
          <ul className="resume-select-list flex gap-6">
            <li
              onClick={() =>
                setEducationData(true) &
                setSkillsData(false) &
                setExperienceData(false) &
                setProjectData(false)
              }
              className={`list-item ${educationData ? "active" : ""}`}>
              Education
            </li>
            <li
              onClick={() =>
                setEducationData(false) &
                setSkillsData(true) &
                setExperienceData(false) &
                setProjectData(false)
              }
              className={`list-item ${skillsData ? "active" : ""}`}>
              Skills
            </li>
            <li
              onClick={() =>
                setEducationData(false) &
                setSkillsData(false) &
                setExperienceData(true) &
                setProjectData(false)
              }
              className={`list-item ${experienceData ? "active" : ""}`}>
              Experience
            </li>
            <li
              onClick={() =>
                setEducationData(false) &
                setSkillsData(false) &
                setExperienceData(false) &
                setProjectData(true)
              }
              className={`list-item ${projectData ? "active" : ""}`}>
              Projects
            </li>
          </ul>
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="resume-content w-full lg:w-3/4 mx-auto">
        {educationData && <Education />}
        {skillsData && <Skills />}
        {experienceData && <Experience />}
        {projectData && <Projects />}
      </div>
    </div>
  );
};

export default Resume;
