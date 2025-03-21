import { useState } from "react";
import { Menu, X } from "lucide-react";
import navLinks from "./navLinks.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-800 shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-pixel-font text-yellow-400 uppercase relative">
          GB
          <span className="absolute inset-0 text-blue-700 -z-10 drop-shadow-[3px_3px_0px_rgba(0,0,139,1)]">
            GB
          </span>
        </h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-white text-lg  font-link-pixel-font hover:text-yellow-400 transition duration-300 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-blue-900 flex flex-col items-center justify-center space-y-6 z-50">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <X size={32} />
          </button>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-white text-2xl font-link-pixel-font hover:text-yellow-400 transition duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
