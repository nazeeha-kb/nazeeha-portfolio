"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section detection logic
      const sections = [
        // "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-md border-stone-100 shadow-sm"
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white font-bold text-xs group-hover:scale-105 transition-transform">
            NB
          </div>
          <span className="text-xl font-display font-bold text-stone-900 tracking-tight">
            Nazeeha Bhoira<span className="text-amber-500">.</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8 underline-indicator">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                activeSection === link.href.slice(1)
                  ? "active text-stone-900"
                  : "text-stone-400"
              }`}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 p-6 md:hidden shadow-xl"
          >
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold uppercase tracking-widest block transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "text-amber-500"
                        : "text-stone-400"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-stone-900 text-white text-sm font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
