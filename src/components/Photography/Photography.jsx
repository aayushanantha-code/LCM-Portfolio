import React, { useState } from "react";
import { motion } from "framer-motion";
import "./photography.css";
import photo1 from "./Photos/pic1.jpg";
import photo2 from "./Photos/pic2.jpg";
import photo3 from "./Photos/pic3.jpg";
import photo4 from "./Photos/pic4.jpg";
import photo5 from "./Photos/pic5.jpg";

const Photography = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      return prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      return prevIndexes.map((prevIndex) => (prevIndex + 4) % 5);
    });
  };

  const images = [photo1, photo2, photo3, photo4, photo5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-tan h-screen">
        <motion.h1
          initial={{ y: -100, opacity: 0 }} // Start above the viewport and invisible
          animate={{ y: 0, opacity: 1 }} // Slide into place and fade in
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          className="text-6xl lg:text-8xl font-extrabold font-serif text-black">
          Photography
        </motion.h1>
      </div>
      <div className="relative flex items-center flex-col justify-center bg-darkgreen h-screen">
        <div className="flex justify-center">
          <p className="text-lg font-serif text-black max-w-[80%] text-center">
            I love exploring nature and going on hikes. The fresh air and the
            rawness of it grounds me when life moves too fast.
          </p>
        </div>

        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Photo ${index}`}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          />
        ))}
        <div className="absolute bottom-10 flex flex-row gap-3 z-10 justify-center w-full">
          <button
            className="text-black bg-tan rounded-md py-2 px-4 hover:bg-darkgrey"
            onClick={handleBack}>
            Back
          </button>
          <button
            className="text-black bg-tan rounded-md py-2 px-4 hover:bg-darkgrey"
            onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Photography;
