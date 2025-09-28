import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaVolumeMute, FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Update html class & save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Blogs", to: "/blogs" },
  ];

  const activeClass =
    "text-red-600 font-bold transition-colors duration-200";
  const inactiveClass =
    "text-gray-700 font-medium hover:text-red-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-red-400";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide dark:text-white">
          <span className="text-black dark:text-white">SHOAIB</span>
          <span className="text-red-600">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white cursor-pointer"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-3"> 
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-black dark:border-white"
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 flex flex-col items-start">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white w-full mt-2"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />} Toggle
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
