import Heading from "../Heading/Heading";
import Microlink from "@microlink/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Watch Haven",
    url: "https://watch-haven-omega.vercel.app/",
    views: 1200,
    rating: 4.7,
  },
  {
    title: "Puppy Express",
    url: "https://puppy-express.vercel.app/",
    views: 980,
    rating: 4.5,
  },
  {
    title: "Tumbler Rizz",
    url: "https://tumbler-rizz.vercel.app/",
    views: 1340,
    rating: 4.9,
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center  bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-slate-100 px-6 py-12 md:py-24 lg:py-28"
    >
      <Heading
        title="Projects"
        className="text-3xl font-bold mb-4 text-yellow-400 "
      />
      <h2 className=" text-center sm:text-center md:text-lg md:text-center lg:text-center leading-relaxed font-jersey text-slate-200">
        Simplicity: Where Less Becomes Limitless.
      </h2>
      <p className=" text-center  sm:text-center md:text-lg md:text-center leading-relaxed font-jersey text-yellow-400 lg:text-center">
        Below you can find some of my latest mockup designs and projects.
      </p>

      <div className="w-full flex flex-wrap justify-center gap-6 mt-8">
        <ProjectCard />
        {projects.map((project, index) => (
          <div
            key={index}
            className="microlink-card relative bg-gray-100 border-4 border-yellow-400 rounded-lg shadow-lg overflow-hidden 
                 transition-transform hover:scale-105 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] xl:w-[24%]"
          >
            <Microlink
              url={project.url}
              size="large"
              className="w-full"
              style={{
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
