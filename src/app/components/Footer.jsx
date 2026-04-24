"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  {
    id: 1,
    url: "#about",
    item: "About",
  },
  {
    id: 2,
    url: "#skills",
    item: "Skills",
  },
  {
    id: 3,
    url: "#projects",
    item: "Projects",
  },
  {
    id: 4,
    url: "#experience",
    item: "Experience",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT: COPYRIGHT */}
        <p className="text-xs font-mono text-stone-400 dark:text-stone-500 tracking-wide">
          © {currentYear} <span className="text-stone-600 dark:text-stone-400">Nazeeha Bhoira</span>
          . All rights reserved.
        </p>

        {/* RIGHT: QUICK LINKS */}
        <div className="flex items-center gap-6 text-xs font-medium text-stone-400 dark:text-stone-500">
          {navigation.map((nav) => (
            <a
              key={nav.id}
              href={nav.url}
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              {nav.item}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-1 hover:text-amber-600 transition-colors"
          >
            Contact <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* SUBTLE BOTTOM FADE LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-700 to-transparent" />
    </footer>
  );
};

export default Footer;
