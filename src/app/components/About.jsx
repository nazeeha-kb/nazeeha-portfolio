"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Download, MapPin, Code2 } from "lucide-react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-stone-50 dark:bg-stone-900 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-stone-400 dark:text-stone-500 uppercase tracking-[0.4em] text-[10px] font-bold">
                About The Developer
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-medium text-stone-900 dark:text-stone-100 leading-[1.1] tracking-tight">
                Turning ideas into <br />
                <span className="text-stone-400 dark:text-stone-500 italic">
                  smooth digital products
                </span>
                .
              </h3>
            </div>

            <div className="space-y-6 text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
              <p>
                I’m a Frontend Developer focused on building clean, responsive,
                and accessible web interfaces using modern technologies like{" "}
                <span className="text-stone-900 dark:text-stone-100 font-medium">
                  React and Next.js
                </span>
                .
              </p>
              <p>
                I enjoy the process of translating complex design languages into
                performant code, with a strict adherence to detail and user
                experience.
              </p>
            </div>

            <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 font-mono text-xs">
              <MapPin size={14} className="text-amber-500" />
              <span>
                Based in{" "}
                <span className="text-stone-900 dark:text-stone-100">Jeddah, Saudi Arabia</span>
              </span>
            </div>

            <div className="flex gap-8 pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200"
              >
                Get in Touch
              </motion.a>

              <motion.a
                href="/Nazeeha_Bhoira_Resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800"
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: MINIMAL SIMPLE VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] flex items-center justify-center pt-12 md:pt-0"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-amber-100/30 dark:bg-amber-900/20 blur-3xl rounded-full" />

            {/* Minimal Build Specimen */}
            <div className="relative w-full max-w-[320px] aspect-square">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-[2.5rem] shadow-sm p-10 flex flex-col justify-between"
              >
                {/* Header: Simulation of window/editor dots */}
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-stone-100 dark:bg-stone-700" />
                  <div className="w-2 h-2 rounded-full bg-stone-100 dark:bg-stone-700" />
                </div>

                {/* Content: Minimalist "Block" representation of a component */}
                <div className="space-y-4">
                  <div className="h-4 w-12 bg-amber-100 dark:bg-amber-900 rounded-md" />
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-stone-50 dark:bg-stone-800 rounded-full" />
                    <div className="h-2 w-full bg-stone-50 dark:bg-stone-800 rounded-full" />
                    <div className="h-2 w-2/3 bg-stone-50 dark:bg-stone-800 rounded-full" />
                  </div>
                </div>

                {/* Footer: Status line */}
                <div className="flex justify-between items-center text-[10px] font-mono text-stone-300 dark:text-stone-600 tracking-widest uppercase">
                  <span>Build.01</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-stone-400 dark:text-stone-500">Success</span>
                  </div>
                </div>
              </motion.div>

              {/* Simple subtle ring decoration */}
              <div className="absolute -inset-4 border border-stone-100 dark:border-stone-800 rounded-[3rem] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
