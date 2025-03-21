import Navbar from "./components/Navbar/Navbar.jsx";
import TechStack from "./components/Stack/TechStack.jsx";
import InfiniteTextLoop from "./components/InfiniteTextLoop/InfiniteTextLoop.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Project from "./components/Project/Project.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfiniteTextLoop />
      <About />

      <TechStack />

      <Project />

      <section className="p-6 md:p-12 bg-gray-700 text-white text-center md:text-left">
        <h2 className="text-2xl md:text-3xl mb-4 font-jersey">Contact</h2>
        <div className="space-y-2">
          <p className="text-base">Email: gwen@example.com</p>
          <p className="text-base">LinkedIn: linkedin.com/in/gwenmbautista</p>
          <p className="text-base">GitHub: github.com/gwenmbautista</p>
        </div>
      </section>
    </>
  );
};

export default App;
