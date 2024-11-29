import React from "react";
import "./Projects.css";
import harvard from "../../assets/harvard.jpg";
import crypto from "../../assets/crypto.png";
import dashboard from "../../assets/dashboard.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title-container">
        <h1 className="projects-title">Projects</h1>
      </div>
      <div className="projects-container">
        <div className="project-container">
          <div className="project-image-container">
            <img src={crypto} alt="Project 1" className="image" />
          </div>
          <div className="project-info-container">
            <h1 className="project-title">Ethereum Blockchain Wallet</h1>
            <p className="project-description">
              A modern web3.0 application connected to the blockchain that
              allows users to connect wallets and make crypto transactions.
              Developed with React, Tailwind, and Solidity to ensure seamless
              front-end design and robust backend smart contracts.
            </p>
            <a
              href="https://github.com/aayushanantha-code/BlockChain-Application"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link">
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image-container">
            <img src={harvard} alt="Project 2" className="image" />
          </div>
          <div className="project-info-container">
            <h1 className="project-title">Virtual Art Gallery</h1>
            <p className="project-description">
              A catalogue built with RESTful APIs (including the Harvard Art
              Gallery API) that allows users to filter artifacts based on
              preferences and view them in a slideshow format.
            </p>
            <a
              href="https://github.com/AayushAnantha/cs1302-api"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link">
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image-container">
            <img src={dashboard} alt="Project 3" className="image" />
          </div>
          <div className="project-info-container">
            <h1 className="project-title">Admin Dashboard</h1>
            <p className="project-description">
              A React-based dashboard featuring interactive graphs for dynamic
              data visualization, user account management, and team
              administration, making it a versatile tool for managing
              information.
            </p>
            <a
              href="https://github.com/aayushanantha-code/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
