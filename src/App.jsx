import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
import Photos from "./components/Photography/Photography";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/photography" element={<Photos />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
