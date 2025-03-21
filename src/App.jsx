import Navbar from "./components/Navbar/Navbar.jsx";
import TechStack from "./components/Stack/TechStack.jsx";
import InfiniteTextLoop from "./components/InfiniteTextLoop/InfiniteTextLoop.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Project from "./components/Project/Project.jsx";
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfiniteTextLoop />
      <About />

      <TechStack />

      <Project />
      <Footer />
    </>
  );
};

export default App;
