import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-creamWhite flex flex-col justify-center items-center px-6 text-charcoalGray font-modern"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-darkOlive text-6xl font-elegant font-bold mb-4"
      >
        Hello, I'm Sowmya Siddanki
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="max-w-xl text-lg mb-8 leading-relaxed"
      >
       Endlessly curious about data and design — building tools that make insights useful and innovation possible.
      </motion.p>

      <motion.a
        href="/Sowmya_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, backgroundColor: "#2F4F4F" }}
        whileTap={{ scale: 0.95 }}
        className="bg-rustOrange text-creamWhite px-8 py-3 rounded-lg shadow-lg font-semibold"
      >
        View Resume
      </motion.a>
    </section>
  );
}
