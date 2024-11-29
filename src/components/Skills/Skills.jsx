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
          <p className="skills-subtitle">Mastery Percent</p>
          <h2 className="skills-title">Things I'm Good At!</h2>
        </div>
        <div className="skills-list">
          {/* Skill Items */}
          {[
            { name: "Java", level: "100%", width: "100%" },
            { name: "Vue.js", level: "90%", width: "90%" },
            { name: "Figma", level: "70%", width: "70%" },
            { name: "React.js", level: "75%", width: "75%" },
            { name: "HTML/CSS", level: "95%", width: "95%" },
          ].map((skill, index) => (
            <div key={index} className="skill">
              <p className="skill-name">{skill.name}</p>
              <span className="skill-bar">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: skill.width }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="skill-level">
                  <span className="skill-percent">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
