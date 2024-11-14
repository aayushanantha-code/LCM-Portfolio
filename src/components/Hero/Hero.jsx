import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import memoji from "../../assets/memoji2.png";
import "./Hero.css";

const Hero = () => {
  const phrases = [
    "Front end developer",
    "Full stack developer",
    "Designer",
    "Student",
  ];
  const [text] = useTypewriter({
    words: phrases,
    typeSpeed: 20,
    loop: true,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="hero-container">
        <div className="memoji-container">
          <img
            className="memoji"
            src={memoji}
            alt="Memoji"
            style={{ width: "2000vh", height: "auto" }}
          />
        </div>
        <div className="hero-right-container">
          <div className="hero-text">
            <h1 className="hero-greeting">Hey I'm Aayush</h1>
            <h2 className="typewriter-text">
              a <span> {text}</span>
              <Cursor
                cursorBlinking={true}
                cursorStyle="|"
                cursorColor="#FFC0CB"
              />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
