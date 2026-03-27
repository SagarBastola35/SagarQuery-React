import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-950 text-white rounded-2xl">
      <div className="p-2 md:p-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <img
                className="w-24 md:w-40 rounded-3xl cursor-pointer"
                src="https://bcassetcdn.com/social/mqq5q1q02g/preview.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-evenly font-bold text-lg lg:text-2xl gap-4 lg:gap-6">
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/signup"
              >
                SignUp
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col items-start font-bold text-lg gap-4 mt-6 pl-4 border-t border-blue-700 pt-6">
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/signup"
              >
                SignUp
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-blue-200 transition"
                href="/login"
              >
                Login
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
