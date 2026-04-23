"use client"

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-linear-to-b from-stone-50 to-stone-100 min-h-[80vh] flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center space-y-6">
        <p className="text-stone-600 uppercase tracking-[0.2em] text-xs">
          NAZEEHA BHOIRA — FRONTEND DEVELOPER
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-stone-900 leading-tight">
          Building fast, accessible, and production-ready web interfaces
        </h1>

        <p className="text-stone-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Frontend Developer focused on building clean, responsive, and
          accessible web interfaces using modern web technologies.
        </p>

        <div className="flex gap-4 justify-center pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn bg-stone-900 text-stone-50 hover:bg-stone-800"
          >
            Get in Touch
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn border border-stone-300 text-stone-900 hover:bg-stone-200"
          >
            See My Work
          </motion.button>
        </div>
      </div>

      {/* subtle background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
