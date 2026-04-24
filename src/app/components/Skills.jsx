"use client";

import React from "react";
import { motion } from "framer-motion";
import { Atom, Box, Cpu } from "lucide-react";
import { div } from "framer-motion/client";

const SkillItem = ({ icon, name }) => (
  <div className="flex items-center gap-3 p-3 group transition-colors">
    <div className="p-2 rounded-lg bg-stone-50 group-hover:bg-white group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
      <img
        src={icon}
        alt={name}
        className="w-5 h-5 object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
    <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900 transition-colors">
      {name}
    </span>
  </div>
);

const Skills = () => {
  const languages = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ];

  const technologies = [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section id="skills" className="py-32 bg-stone-50 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center md:text-left space-y-4">
          <div className="flex items-center gap-2 text-stone-400 font-mono text-[10px] uppercase font-bold tracking-[0.4em]">
            <div className="w-8 h-[1px] bg-stone-200" />
            <span>The Toolbox</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight">
            Capabilities &{" "}
            <span className="text-stone-400 italic">Infrastructure</span>.
          </h3>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-stone-200 lg:p-10 p-8 rounded-[2.5rem] space-y-4 shadow-sm"
          >
            <div className="space-y-4 flex gap-5">
              <div className="flex justify-between items-start">
                <Cpu className="text-stone-500" size={24} />
              </div>

              <h4 className="text-xl font-semibold text-stone-900">
                Languages
              </h4>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-2">
              {languages.map((skill) => (
                <SkillItem
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-stone-200 lg:p-10 p-8 rounded-[2.5rem] space-y-4 shadow-sm"
          >
            <div className="space-y-4 flex gap-5">
              <div className="flex justify-between items-start">
                <Atom className="text-stone-500" size={24} />
              </div>

              <h4 className="text-xl font-semibold text-stone-900">
                Technologies
              </h4>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-2">
              {technologies.map((skill) => (
                <SkillItem
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-stone-200 lg:p-10 p-8 rounded-[2.5rem] space-y-4 shadow-sm"
          >
            <div className="space-y-3">
              <div className="space-y-4 flex gap-5">
                <div className="flex justify-between items-start">
                  <Box className="text-stone-500" size={24} />
                </div>

                <h4 className="text-xl font-semibold text-stone-900">Tools</h4>
              </div>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-2">
              {tools.map((skill) => (
                <SkillItem
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
