import React from "react";

export default function Navbar() {
  return (
    <header className="bg-dark-rose md:sticky top-0 z-10 font-josefin-sans">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around">
        <a href="#" className="title-font font-medium text-white mb-4 md:mb-0">
          &#60;&#47;&#62;
        </a>
        <nav className="md:mr-0 md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-flex-end gap-10 lg:gap-15">
          <a href="#about" className="text-white hover:underline">
            About
          </a>
          <a href="#portfolio" className="text-white hover:underline">
            Portfolio
          </a>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
