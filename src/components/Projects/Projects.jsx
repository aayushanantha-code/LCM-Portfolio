import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title-container">
        <h1 className="projects-title">Projects</h1>
      </div>
      <div className="projects-container">
        <div className="project-container">
          <div className="project-image-container">
            <img src="#" alt="Project 1" className="image" />
          </div>
          <div className="separator"></div>
          <div className="project-info-container">
            <h1 className="project-title">Project 1</h1>
            <p className="project-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos!
            </p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image-container">
            <img src="#" alt="Project 2" className="image" />
          </div>
          <div className="separator"></div>
          <div className="project-info-container">
            <h1 className="project-title">Project 2</h1>
            <p className="project-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos!
            </p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image-container">
            <img src="#" alt="Project 3" className="image" />
          </div>
          <div className="separator"></div>
          <div className="project-info-container">
            <h1 className="project-title">Project 3</h1>
            <p className="project-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
