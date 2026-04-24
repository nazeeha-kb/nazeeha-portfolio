"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-stone-50 overflow-hidden">
      {/* soft ambient background layers */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-stone-200/40 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-3xl text-center space-y-8">
        {/* subtle label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-stone-500 uppercase tracking-[0.35em] text-[11px] font-semibold"
        >
          NAZEEHA BHOIRA — FRONTEND DEVELOPER
        </motion.p>

        {/* main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-medium text-stone-900 leading-[1.1] tracking-tight"
        >
          Building{" "}
          <span className="text-stone-400 italic font-serif">
            fast, elegant
          </span>{" "}
          and production-ready interfaces
        </motion.h1>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-stone-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Frontend Developer focused on crafting clean, responsive, and
          accessible web experiences using modern React and Next.js ecosystems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 justify-center pt-2"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn bg-stone-900 text-stone-50 hover:bg-stone-800"
          >
            Get in Touch
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn border border-stone-300 text-stone-900 hover:bg-stone-200"
          >
            See My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
