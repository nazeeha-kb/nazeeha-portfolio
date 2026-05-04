"use client"
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
  {
    id: 1,
    title: "Space Tourism Website",
    image:
      "/space-tourism.png",
    tags: ["React.js", "TailwindCSS"],
    description:
      "A fully dynamic website with immersive space exploration experiences and reactive layouts.",
    demoUrl:
      "https://space-tourism-website-main-eight-chi.vercel.app/",
    githubUrl:
      "https://github.com/nazeeha-kb/space-tourism-website-main",
  },
  {
    id: 2,
    title: "Bookmark Landing",
    image:
      "/bookmark-landing.png",
    tags: ["TailwindCSS", "Semantic HTML", "Mobile-first"],
    description:
      "Premium landing page interface featuring sleek tabbed features and seamless accordion interactions.",
    demoUrl:
      "https://bookmark-landing-page-master-gamma-two.vercel.app/",
    githubUrl:
      "https://github.com/nazeeha-kb/bookmark-landing-page-master",
  },
  {
    id: 3,
    title: "Flavor Fusion",
    image:
      "/flavor-fusion.png",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "GSAP"],
    description:
      "AI-powered Recipe generator with authentication. Generates recipes for ingredients entered.",
    demoUrl: "https://flavor-fusion-ai.vercel.app/",
    githubUrl: "https://github.com/nazeeha-kb/flavor-fusion",
  },
  {
    id: 4,
    title: "PullBoard",
    image:
      "/pullboard.png",
    tags: ["React", "TailwindCSS", "Axios", "Vite"],
    description:
      "GitHub pull request tracker with a dashboard for monitoring and managing PRs efficiently.",
    demoUrl:
      "https://v57-tier3-team-33-frontend.onrender.com/",
    githubUrl:
      "https://github.com/chingu-voyages/V57-tier3-team-33",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl overflow-hidden flex flex-col shadow-[0_10px_30px_-15px_rgba(28,25,23,0.08)] h-full group/card mb-12 h-full"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-stone-900/0 group-hover/card:bg-stone-900/5 dark:group-hover/card:bg-stone-900/10 transition-colors duration-500" />
    </div>

    <div className="p-6 sm:p-8 flex flex-col flex-grow gap-5 sm:gap-6">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
          {project.title}
        </h3>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 sm:h-11 aspect-square border border-stone-200 dark:border-stone-700 rounded-full flex items-center justify-center text-stone-400 dark:text-stone-500 bg-white dark:bg-stone-800"
          title="GitHub Repo"
        >
          <FontAwesomeIcon icon={faGithub} size={20} />
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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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
  return (
    <section
      id="projects"
      className="py-32 bg-white dark:bg-stone-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <div className="flex items-center justify-center gap-2 text-stone-400 dark:text-stone-500 font-mono text-[10px] uppercase font-bold tracking-[0.4em]">
            <div className="w-8 h-[1px] bg-stone-200 dark:bg-stone-700" />
            <span>Selected Projects</span>
            <div className="w-8 h-[1px] bg-stone-200 dark:bg-stone-700" />
          </div>
          <h3 className="text-4xl md:text-5xl font-sans font-medium text-stone-900 dark:text-stone-100 tracking-tight">
            Crafting{" "}
            <span className="text-stone-400 dark:text-stone-500 italic">
              Digital
            </span>{" "}
            Excellence.
          </h3>
        </div>

        <div className="relative group/carousel">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Mousewheel]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-3 rounded-full border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 shadow-lg cursor-pointer hover:bg-white dark:hover:bg-stone-800 transition-all opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0">
            <ChevronLeftIcon size={24} />
          </button>

          <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-3 rounded-full border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 shadow-lg cursor-pointer hover:bg-white dark:hover:bg-stone-800 transition-all opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0">
            <ChevronRightIcon size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #d6d3d1;
          opacity: 1;
        }
        .dark .swiper-pagination-bullet {
          background: #57534e;
        }
        .swiper-pagination-bullet-active {
          background: #111827;
          transform: scale(1.25);
        }
        .dark .swiper-pagination-bullet-active {
          background: #f5f5f4;
        }
      `}</style>
    </section>
  );
};

export default Projects;