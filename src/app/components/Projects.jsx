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
      "GitHub pull request tracker with a dashboard for monitoring and managing PRs.",
    demoUrl: "https://v57-tier3-team-33-frontend.onrender.com/",
    githubUrl: "https://github.com/chingu-voyages/V57-tier3-team-33",
  },
];
const ProjectCard = ({ project }) => (
  <motion.div className="w-[280px] sm:w-[380px] bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl overflow-hidden flex flex-col shadow-[0_10px_30px_-15px_rgba(28,25,23,0.08)] h-full group/card">
    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
      />
      <div className="absolute inset-0 bg-stone-900/0 group-hover/card:bg-stone-900/5 dark:group-hover/card:bg-stone-900/10 transition-colors duration-500" />
    </div>

    <div className="p-6 sm:p-8 flex flex-col flex-grow gap-5 sm:gap-6">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
          {project.title}
        </h3>

        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 sm:h-11 aspect-square border border-stone-200 dark:border-stone-700 rounded-full flex items-center justify-center text-stone-400 dark:text-stone-500 bg-white dark:bg-stone-800"
        >
          <FontAwesomeIcon icon={faGithub} />
        </motion.a>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 rounded-full text-[10px] font-bold uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed line-clamp-2">
        {project.description}
      </p>

      <motion.a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 py-3 rounded-xl flex items-center justify-center gap-3 text-xs font-bold"
      >
        <ExternalLink size={16} className="text-amber-500" />
        Live Demo
      </motion.a>
    </div>
  </motion.div>
);

const Projects = () => {
  const containerRef = useRef(null);
  const isAdjusting = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const tripleProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      containerRef.current.scrollLeft = scrollWidth / 3;
    }
  }, []);

  useEffect(() => {
    if (isHovered || isTouching || isManualScrolling) return;

    let rafId;
    const speed = 0.5;

    const autoScroll = () => {
      if (containerRef.current && !isAdjusting.current) {
        containerRef.current.scrollLeft += speed;
      }
      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered, isTouching, isManualScrolling]);

  const handleScroll = () => {
    if (!containerRef.current || isAdjusting.current) return;

    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const oneSetWidth = scrollWidth / 3;

    const buffer = 10;

    if (scrollLeft <= buffer) {
      isAdjusting.current = true;
      container.scrollLeft = scrollLeft + oneSetWidth;
      setTimeout(() => (isAdjusting.current = false), 10);
    } else if (scrollLeft >= oneSetWidth * 2 - buffer) {
      isAdjusting.current = true;
      container.scrollLeft = scrollLeft - oneSetWidth;
      setTimeout(() => (isAdjusting.current = false), 10);
    }
  };

  const scrollLeftBtn = () => {
    if (!containerRef.current) return;
    setIsManualScrolling(true);
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
    setTimeout(() => setIsManualScrolling(false), 800);
  };

  const scrollRightBtn = () => {
    if (!containerRef.current) return;
    setIsManualScrolling(true);
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
    setTimeout(() => setIsManualScrolling(false), 800);
  };

  return (
    <section
      id="projects"
      className="py-32 bg-white dark:bg-stone-900 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-stone-400 dark:text-stone-500 font-mono text-[10px] uppercase font-bold tracking-[0.4em]">
            <div className="w-8 h-[1px] bg-stone-200 dark:bg-stone-700" />
            <span>Selected Projects</span>
            <div className="w-8 h-[1px] bg-stone-200 dark:bg-stone-700" />
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-stone-900 dark:text-stone-100 tracking-tight">
            Crafting{" "}
            <span className="text-stone-400 dark:text-stone-500 italic">
              Digital
            </span>{" "}
            Excellence.
          </h3>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={scrollLeftBtn}
            className="absolute dark:text-stone-7G00 bg-white hover:bg-stone-100 dark:bg-stone-500 dark:hover:bg-stone-600 dark:active:bg-stone-600 rounded-full border border-stone-200 dark:border-stone-700 p-3 -left-2 top-1/2"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollRightBtn}
            className="absolute dark:text-stone-7G00 bg-white hover:bg-stone-100 dark:bg-stone-500 dark:hover:bg-stone-600 dark:active:bg-stone-600 rounded-full border border-stone-200 dark:border-stone-700 p-3 -right-2 top-1/2"
          >
            <ChevronRight />
          </button>

          <div
            ref={containerRef}
            onScroll={handleScroll}
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={() => setIsTouching(false)}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory px-6"
          >
            {tripleProjects.map((project, i) => (
              <div key={i} className="snap-center shrink-0">
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
