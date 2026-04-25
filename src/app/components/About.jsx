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
                  Seamless Interfaces
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
                I enjoy building with code, taking ideas and bringing them to
                life through development and problem-solving. Beyond UI, I like
                tackling frontend challenges and creating real solutions.
              </p>
            </div>

            <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 font-mono text-xs">
              <MapPin size={14} className="text-amber-500" />
              <span>
                Based in{" "}
                <span className="text-stone-900 dark:text-stone-100">
                  Jeddah, Saudi Arabia
                </span>
              </span>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-2"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn w-full sm:w-auto bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 text-center"
              >
                Get in Touch
              </motion.a>

              <motion.a
                href="/Nazeeha_Bhoira_Resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn w-full sm:w-auto border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 text-center"
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: MINIMAL SIMPLE VISUAL */}
          {/* RIGHT: VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow background */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-stone-300/30 via-transparent to-amber-200/20 dark:from-stone-700/20 dark:to-amber-500/10 blur-3xl rounded-[2rem] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-lg">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent z-10" />

              <img
                src="/workspace.png"
                alt="Developer workspace"
                className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
