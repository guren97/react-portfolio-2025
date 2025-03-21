import Heading from "../Heading/Heading";
import ProjectCard from "./ProjectCard";

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

      <div className="w-full flex flex-col items-center justify-center lg:flex lg:items-center lg:justify-center lg:mx-auto  ">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Project;
