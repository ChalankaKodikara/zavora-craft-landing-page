import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="relative z-50 flex flex-col md:flex-row md:justify-between items-center px-6 py-4 text-[#1b2e13] text-sm font-medium tracking-wide gap-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo-white-background.png"
            alt="Zavora Craft Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-green-600">
            HOME
          </a>
          <a href="#" className="hover:text-green-600">
            ABOUT
          </a>
          <a href="#" className="hover:text-green-600">
            SHOP
          </a>
          <a href="#" className="hover:text-green-600">
            BLOG
          </a>
          <a href="#" className="hover:text-green-600">
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden absolute right-6 top-6">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#1b2e13]">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col">
          {/* Top Bar with logo and close */}

          {/* Navigation Links */}
          <ul className="flex flex-col items-center justify-center gap-4 flex-1 text-[#1b2e13] font-semibold text-base tracking-wide">
            <li>
              <a href="#" className="text-[#263e1c]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#263e1c]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#263e1c]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#263e1c]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Rest of your main content */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-8 gap-8 md:gap-12 w-full">
        {/* Text Section */}
        <div className=" ml-[15%] w-full max-w-[500px] text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-wider leading-snug text-[#1b2e13]">
            ZAVORA CRAFT <br /> JEWELLERY STORE
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#2c2c2c]">
            Zavora Craft & Jewellery Store was born out of a passion for
            preserving Sri Lanka's timeless heritage through artisanal jewelry
            and handcrafted treasures. Rooted in centuries-old traditions, each
            piece we create tells a story etched not just in gold or silver, but
            in soul, history, and pride.
          </p>
          <button className="mt-6 sm:mt-8 bg-[#263e1c] text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-[#1a2c14] transition">
            COMING SOON
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto md:flex-1 flex justify-center md:justify-center">
          <img
            src="/2222222222.png"
            alt="Leaf and CRAFT text"
            className="w-[75%] md:w-[500px] h-auto object-contain"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
