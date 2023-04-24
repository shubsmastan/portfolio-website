import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="sticky bg-dark-rose font-josefin-sans top-0 z-20 text-cream text-md sm:text-lg">
      <div className="min-h-10v container mx-auto p-5 flex items-center justify-around flex-wrap flex-col md:flex-row">
        <a href="#" className="text-cream mb-4">
          <FontAwesomeIcon icon={faCode} style={{ color: "#fff" }} />
        </a>
        <nav className="flex flex-wrap items-center justify-flex-end gap-5 sm:gap-10 md:gap-15">
          <a href="#about" className="text-cream hover:underline">
            About
          </a>
          <a href="#portfolio" className="text-cream hover:underline">
            Portfolio
          </a>
          <a href="#skills" className="text-cream hover:underline">
            Skills
          </a>
          <a href="#contact" className="text-cream hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
