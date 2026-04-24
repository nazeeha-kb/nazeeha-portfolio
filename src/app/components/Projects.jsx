"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    id: 1,
    title: "Space Toursim Website",

    image: "/space-tourism.png",
    tags: ["React.js", "TailwindCSS"],
    description:
      "A fully dynamic WordPress website with custom theme, ACF integration, and SEO optimization.",
    demoUrl: "https://space-tourism-website-main-eight-chi.vercel.app/",
    githubUrl: "https://github.com/nazeeha-kb/space-tourism-website-main",
  },
  {
    id: 2,
    title: "Bookmark Landing Page",

    image: "/bookmark-landing.png",
    tags: ["TailwindCSS", "Semantic HTML", "Mobile-first"],
    description:
      "Premium travel planning interface featuring immersive aesthetics and seamless booking logic.",
    demoUrl: "https://bookmark-landing-page-master-gamma-two.vercel.app/",
    githubUrl: "https://github.com/nazeeha-kb/bookmark-landing-page-master",
  },
  {
    id: 3,
    title: "Flavor Fusion",

    image: "/flavor-fusion.png",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "GSAP"],
    description:
      "AI-powered Recipe generator with authentication. Generates recipes for ingredients entered.",
    demoUrl: "https://flavor-fusion-ai.vercel.app/",
    githubUrl: "https://github.com/nazeeha-kb/flavor-fusion",
  },
  {
    id: 4,
    title: "PullBoard",

    image: "/pullboard.png",
    tags: ["React", "TaiwlindCSS", "Axios", "Vite"],
    description:
      "AI-powered Recipe generator with authentication. Generates recipes for ingredients entered.",
    demoUrl: "https://v57-tier3-team-33-frontend.onrender.com/",
    githubUrl: "https://github.com/chingu-voyages/V57-tier3-team-33",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div className="min-w-[85vw] sm:min-w-120 bg-white border border-stone-200 rounded-2xl sm:rounded-xl overflow-hidden flex flex-col shadow-[0_20px_60px_-20px_rgba(28,25,23,0.08)]">
    {/* IMAGE */}
    <div className="relative aspect-16/10 sm:aspect-video overflow-hidden bg-stone-100 group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
    </div>

    {/* Content */}
    <div className="py-5 sm:py-8 md:py-10 px-6 flex flex-col gap-6 md:gap-4">
      {/* TITLE */}
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight leading-tight">
          {project.title}
        </h3>
        <motion.a
          title="Github Repo"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, rotate: 4 }}
          whileTap={{ scale: 0.95 }}
          className="h-11 aspect-square border border-stone-200 rounded-full flex items-center justify-center text-stone600 hover:text-stone-900 hover:border-stone-400 transition-all"
        >
          {/* GitHub icon optional */}
          <FontAwesomeIcon icon={faGithub} />{" "}
        </motion.a>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 sm:px-4 py-1 sm:py-1.5 bg-stone-50 border border-stone-200 text-stone-600 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-tight"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* DESCRIPTION */}
      <p className="text-stone-500 leading-relaxed">{project.description}</p>

      {/* BUTTONS */}
      <div className="flex gap-3 sm:gap-4 items-center pt-1">
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 bg-stone-900 text-white py-3 rounded-lg flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold hover:bg-stone-800 transition-colors"
        >
          <ExternalLink size={16} />
          Live Demo
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const containerRef = useRef(null);
  const isAdjusting = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const tripleProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth } = containerRef.current;
      // Start at the beginning of the middle set
      containerRef.current.scrollLeft = scrollWidth / 3;
    }
  }, []);

  useEffect(() => {
    if (isHovered) return;

    let raf;
    const speed = 0.3; // tweak this (lower = slower smoother)

    const autoScroll = () => {
      if (containerRef.current) {
        if (!isAdjusting.current) {
          containerRef.current.scrollLeft += speed;
        }
      }
      raf = requestAnimationFrame(autoScroll);
    };

    raf = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(raf);
  }, [isHovered]);

  const onScroll = () => {
    if (!containerRef.current || isAdjusting.current) return;

    const container = containerRef.current;
    const { scrollLeft, scrollWidth } = container;

    const oneSetWidth = scrollWidth / 3;
    const buffer = 100;

    if (scrollLeft <= buffer) {
      isAdjusting.current = true;

      // disable snap BEFORE jump
      container.classList.add("snap-none");

      requestAnimationFrame(() => {
        container.scrollLeft = scrollLeft + oneSetWidth;

        // re-enable snap AFTER jump
        requestAnimationFrame(() => {
          container.classList.remove("snap-none");
          isAdjusting.current = false;
        });
      });
    }

    if (scrollLeft >= oneSetWidth * 2 - buffer) {
      isAdjusting.current = true;

      container.classList.add("snap-none");

      requestAnimationFrame(() => {
        container.scrollLeft = scrollLeft - oneSetWidth;

        requestAnimationFrame(() => {
          container.classList.remove("snap-none");
          isAdjusting.current = false;
        });
      });
    }
  };
  const scrollByAmount = () => {
    const card = containerRef.current?.querySelector(".snap-center");
    return card ? card.clientWidth + 32 : 552;
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -scrollByAmount(),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({
      left: scrollByAmount(),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="py-32 bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-stone-400 font-mono text-[10px] uppercase font-bold tracking-[0.4em]">
            <div className="w-8 h-[1px] bg-stone-200" />
            <span>Selected Projects</span>
            <div className="w-8 h-[1px] bg-stone-200" />
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-stone-900 tracking-tight">
            Crafting <span className="text-stone-400 italic">Digital</span>{" "}
            Excellence.
          </h3>
        </div>

        <div className="relative group/carousel px-0 md:px-12">
          {/* Side Arrows */}
          <div className="absolute top-1/2 left-0 z-20 -translate-y-1/2 hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button
              onClick={scrollLeft}
              className="w-16 h-16 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-400 transition-all shadow-xl active:scale-95 translate-x-1/2"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 z-20 -translate-y-1/2 hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button
              onClick={scrollRight}
              className="w-16 h-16 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-400 transition-all shadow-xl active:scale-95 -translate-x-1/2"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div
            ref={containerRef}
            onScroll={onScroll}
            className="flex gap-5 sm:gap-8 overflow-x-auto no-scrollbar pb-10 pt-4 snap-x snap-mandatory px-2 sm:px-0"
          >
            {tripleProjects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="snap-center">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
