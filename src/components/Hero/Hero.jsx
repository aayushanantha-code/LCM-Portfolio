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
      {/* Hero Container */}
      <div className="flex flex-col justify-center items-center bg-tan h-screen">
        <h1 className="text-6xl lg:text-8xl font-extrabold font-serif text-black">
          Hey! I'm Aayush
        </h1>
        <h2 className="mt-4 text-xl lg:text-2xl text-black font-medium">
          a <span>{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#ff5722" />
        </h2>
      </div>

      {/* Hero Content Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center bg-complementary h-screen px-[10vh]">
        {/* Left Column: About Me Text */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
            About Me
          </h1>
          <p className="text-lg lg:text-xl text-gray-700">
            Hey! I'm a third year student at Georgia Tech studinging
            computational media. My passion lies in front end development and
            design. I love creating beautiful and responsive websites that are
            accessible to everyone. I'm always looking for new opportunities to
            learn and grow as a developer. I've always had a problem solving
            tuned brain, but I fell in love with software and design back in
            highschool when I was taking an engineering class. I realised how
            hard it can be to aquire the resources and materials you might need
            for a project. You come up with a great idea and cant wait to get
            started, only to find that not a single thing you need is available.
            In development, everything you might need is just a few clicks away
            on the internet! This allowed me to work on small fun projects by
            myself and the more I learned and improved, the more I was sure that
            this is what I want to do.
          </p>
        </div>

        {/* Right Column: Memoji Image */}
        <div className="flex justify-center items-center lg:w-1/2">
          <img
            src={memoji}
            alt="Memoji"
            className="rounded-lg w-[60%] lg:w-[40%]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

/*

  return (
    
    <>
    <h1>Hero</h1>
    
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
                cursorColor="#ff5722"
              />
            </h2>
          </div>
        </div>
      </div>
      
    </>
  );
  
*/
