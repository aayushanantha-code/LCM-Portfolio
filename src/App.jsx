import React from "react";
import video from "./assets/background-video2.mp4";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <div className="background-video-container">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Scroll down to see more content while the video stays as the
          background.
        </p>
      </div>
    </div>
  );
}

export default App;
