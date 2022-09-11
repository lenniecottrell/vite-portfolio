import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import ValuesSection from "../components/ValuesSection";
import FaqSection from "../components/FaqSection";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ValuesSection />
      <FaqSection />
    </motion.div>
  );
};

export default About;
