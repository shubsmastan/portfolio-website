import React from "react";

export default function Navbar() {
  return (
    <header className="bg-dark-rose font-josefin-sans top-0 z-10 text-lg text-cream md:sticky md:text-xl">
      <div className="min-h-10v container mx-auto p-5 flex items-center justify-around flex-wrap flex-col md:flex-row">
        <a href="#" className="text-cream">
          &#60;&#47;&#62;
        </a>
        <nav className="flex flex-wrap items-center justify-flex-end gap-10 lg:gap-15">
          <a href="#about" className="text-cream hover:underline">
            About
          </a>
          <a href="#portfolio" className="text-cream hover:underline">
            Portfolio
          </a>
          <a href="#contact" className="text-cream hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
