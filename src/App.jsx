import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:justify-between items-center px-6 py-4 text-[#1b2e13] text-sm font-medium tracking-wide gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/Logo-white-background.png"
            className="w-25 h-25 object-contain md:w-25 md:h-25"
          />
 
        </div>{" "}
        <nav className="flex flex-wrap justify-center md:justify-end gap-4">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SHOP</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-8 gap-8 md:gap-12 w-full">
        {/* Text Content */}
        <div className="w-full max-w-[500px] text-center md:text-left">
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
        {/* Image Section */}
        <div className="w-[90%] md:flex-2/3 max-w-[800px]">
          <img
            src="/2222222222.png"
            alt="Leaf and CRAFT text"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
