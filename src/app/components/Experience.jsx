"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "HerDeen",
    location: "Remote",
    period: "2026 — Present",
    description:
      "Building the frontend for HerDeen's website with focus on performance optimization and accessibility standards improvements and scalability goals",
  },
  {
    id: 2,
    role: "WordPress Developer",
    company: "Al-Teraz",
    location: "Remote",
    period: "2026",
    description:
      "Built WordPress website for the Alteraz tailoring store with Arabic RTL support performance optimization and responsive design implementation",
  },
  {
    id: 3,
    role: "Frontend Developer - Intern",
    company: "Elevvo Pathways",
    location: "Remote",
    period: "2025",
    description:
      "Built 4 frontend projects focused on responsive design, UI consistency, and cross-device compatibility.",
  },
];

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center justify-between w-full md:mb-15 mb-10 last:mb-0 ${isEven ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full md:w-[45%] p-8 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-[2rem] shadow-sm relative group`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-stone-400 dark:text-stone-500 group-hover:text-amber-500 transition-colors">
            <Briefcase size={20} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-none">
              {exp.role}
            </h4>
            <span className="text-sm text-stone-400 dark:text-stone-500 font-medium">
              {exp.company}
            </span>
          </div>
        </div>

        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-stone-50 dark:border-stone-800">
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-stone-400 dark:text-stone-500">
            <Calendar
              size={12}
              className="text-stone-300 dark:text-stone-600"
            />
            {exp.period}
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-stone-400 dark:text-stone-500">
            <MapPin size={12} className="text-stone-300 dark:text-stone-600" />
            {exp.location}
          </div>
        </div>

        {/* Connector Line Accent */}
        <div
          className={`absolute top-1/2 ${isEven ? "-left-8" : "-right-8"} w-8 h-[1px] bg-stone-200 dark:bg-stone-700 hidden md:block`}
        />
      </motion.div>

      {/* CENTER NODE */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-stone-900 dark:bg-stone-100 shadow-[0_0_0_8px_white] dark:shadow-[0_0_0_8px_stone-900]" />
      </div>

      {/* EMPTY SPACE (for layout balancing) */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 bg-stone-50/50 dark:bg-stone-900/50 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* HEADER */}
        <div className="text-center mb-24 space-y-4">
          <div className="flex items-center justify-center gap-2 text-stone-400 dark:text-stone-500 font-mono text-[10px] uppercase font-bold tracking-[0.4em]">
            <div className="w-8 h-[1px] bg-stone-200 dark:bg-stone-700" />
            <span>Professional Journey</span>
            <div className="w-8 h-[1px] bg-stone-200 dark:bg-stone-700" />
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-stone-900 dark:text-stone-100 tracking-tight">
            Work{" "}
            <span className="text-stone-400 dark:text-stone-500 italic">
              Experience
            </span>
            .
          </h3>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-12 bottom-0 w-[1px] bg-stone-200 dark:bg-stone-700 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* DECORATION */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 dark:bg-amber-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/30 dark:bg-stone-800/30 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Experience;
