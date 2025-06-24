// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-darkOlive">Sowmya</h1>
      <ul className="flex gap-6 text-sm font-semibold">
        <li><a href="#home" className="hover:text-rustOrange">Home</a></li>
        <li><a href="#about" className="hover:text-rustOrange">About</a></li>
        <li><a href="#projects" className="hover:text-rustOrange">Projects</a></li>
        <li><a href="#experience" className="hover:text-rustOrange">Work</a></li>
        <li><a href="#skills" className="hover:text-rustOrange">Skills</a></li>
        
        <li><a href="#contact" className="hover:text-rustOrange">Contact</a></li>
        <li>
        <a
  href="/Sowmya_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-rustOrange text-creamWhite px-8 py-3 rounded-lg shadow-lg font-semibold hover:bg-darkOlive transition"
>
  View Resume
</a>

        </li>
      </ul>
    </nav>
  );
}
