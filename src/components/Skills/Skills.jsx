import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="skills-container">
      <div className="skills-content">
        <div className="skills-header">
          <p className="skills-subtitle">Skills</p>
          <h2 className="skills-title">Things I'm Good At!</h2>
        </div>
        <div className="skills-list">
          <div className="skill">
            <p className="skill-name">Java</p>
            <span className="skill-bar">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="skill-level">
                <span className="skill-percent">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="skill">
            <p className="skill-name">Vue.js</p>
            <span className="skill-bar">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="skill-level">
                <span className="skill-percent">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="skill">
            <p className="skill-name">Figma</p>
            <span className="skill-bar">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="skill-level">
                <span className="skill-percent">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="skill">
            <p className="skill-name">React.js</p>
            <span className="skill-bar">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="skill-level">
                <span className="skill-percent">75%</span>
              </motion.span>
            </span>
          </div>
          <div className="skill">
            <p className="skill-name">HTML/CSS</p>
            <span className="skill-bar">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "95%" }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="skill-level">
                <span className="skill-percent">95%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
