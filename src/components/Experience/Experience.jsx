import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import "./Experience.css";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="experience-container">
      <div className="experience-header">
        <p className="experience-timeline">2010 - 2022</p>
        <h2 className="experience-title">Job Experience</h2>
      </div>
      <div className="experience-list">
        <Card
          title="Full Stack Development Intern"
          subTitle="Nuvizz Inc"
          result="Jun 2024 - Aug 2024"
          des="Designed and developed a data purger component into the developer dashboard. I was given creative freedom with the UI and it allowed me to advance my front-end skillset significantly. Additionally, I gained valuable experience with MongoDB and Node.js while testing and developing databases and backend."
        />
        <Card
          title="Software Engineering Intern"
          subTitle="Nuvizz Inc"
          result="Jun 2021 - Jan 2022"
          des="Using the Tesseract OCR engine, I created an application that allowed delivery drivers to take pictures of their delivery form and receive the extracted data in a digital ticket, making the delivery process paperless."
        />
      </div>
    </motion.div>
  );
};

export default Experience;
