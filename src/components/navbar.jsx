import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

function PortfolioNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white py-4 md:py-10 sticky top-0 shadow-lg z-50" style={{borderBottom:'1px solid rgba(255, 255, 255, 0.1)'}}>
      <div className="max-w-full px-4 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl md:text-4xl font-bold">
          <span style={{ color: "white" }}>Mukul</span>{" "}
          <span style={{ color: "#3b82f6" }}>Singh</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose size={28} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-inter text-lg md:text-xl">
          <li>
            <a href="#about" className="hover:text-blue-400 hover:scale-110 transition duration-300 inline-block">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 hover:scale-110 transition duration-300 inline-block">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 hover:scale-110 transition duration-300 inline-block">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 hover:scale-110 transition duration-300 inline-block">
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-slate-900 flex flex-col gap-4 p-4 md:hidden">
            <li>
              <a href="#about" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>
                Contact Me
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default PortfolioNav;
