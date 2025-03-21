import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import v1_portfolio from "../../assets/images/v1-portfolio.png";
import v2_portfolio from "../../assets/images/v2-portfolio.png";
import v3_portfolio from "../../assets/images/the_green_one.png";

const projects = [
  {
    id: "project_one",
    image: v1_portfolio,
    title: "Portfolio Version 1",
    description:
      "Version One of my Portfolio Website which is currently deployed on github pages. It is built using HTML, CSS, and JavaScript, also includes email sending API using emailJS.",
  },
  {
    id: "project_two",
    image: v2_portfolio,
    title: "Mock Design",
    description:
      "This design is for one of my clients. It is designed using Figma.",
  },
  {
    id: "project_three",
    image: v3_portfolio,
    title: "Mock Design",
    description:
      "Mockup Design for my portfolio website. It is designed using Figma.",
  },
];

const ProjectCard = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-6 p-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 drop-shadow-[5px_5px_0px_rgba(0,0,139,1)] rounded-lg"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-100 border-4 border-yellow-400 rounded-lg shadow-lg overflow-hidden 
              flex-none w-72 sm:w-full snap-center transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-full h-56 object-top object-cover rounded-md"
              src={project.image}
              alt={project.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 font-link-pixel-font text-yellow-400 drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]">
                {project.title}
              </div>
              <p className="text-gray-700 text-base font-jersey">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scroll("prev")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-400  text-blue-700 p-2 rounded-full drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]  z-10 sm:hidden md:hidden lg:hidden hover:p-3"
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scroll("next")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400  text-blue-700  p-2 rounded-full drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]  z-10 sm:hidden md:hidden lg:hidden hover:p-3"
      >
        <ChevronRight size={24} />
      </motion.button>
    </div>
  );
};

export default ProjectCard;
