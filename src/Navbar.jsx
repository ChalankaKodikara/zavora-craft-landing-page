import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // For icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Features", "Pricing", "Contact"];

  return (
    <nav className="bg-[#2d2f36] text-white w-full z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">Zavora Craft</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:text-green-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-6 border-t border-gray-600">
          {navItems.map((item, index) => (
            <li key={index} className="w-full text-center">
              <a
                href="#"
                className={`block py-2 text-lg border-b border-gray-600 ${
                  index === 0 ? "text-green-400" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
