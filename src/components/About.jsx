import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center py-20 bg-cream font-josefin-sans text-gray-800 text-lg md:text-xl"
    >
      <div className="container flex flex-col mx-auto px-10 py-10 md:gap-10 lg:gap-20 md:flex-row xl:px-40">
        <div className="flex flex-col items-center text-center mb-10 md:w-1/2 md:items-start md:text-left md:mb-0 lg:flex-grow lg:w-2/3">
          <h1 className="text-4xl md:text-5xl">Hi, I'm Shoaib.</h1>
          <p className="mb-8 leading-relaxed">
            I'm an aspiring frontend web developer.
          </p>
          <p className="mb-8 leading-relaxed">
            I am a London-based primary computer science teacher and have been
            working in education for almost ten years. After a rewarding career
            in teaching, I am now looking to move into software development.
          </p>
          <p className="mb-8 leading-relaxed">
            I'm in the process of completing a full-stack software engineering
            bootcamp with{" "}
            <a
              href="https://thejump.tech"
              className="hover:underline"
              target="_blank"
            >
              The Jump
            </a>
            , which I am doing alongside learning from{" "}
            <a
              href="https://www.theodinproject.com"
              className="hover:underline"
              target="_blank"
            >
              The Odin Project
            </a>
            . I'm looking for a role where I will be able to use and develop the
            skills I have learnt so far.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-dark-rose border-0 py-2 px-6 hover:bg-dark-rose-hover rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 hover:bg-gray-700 rounded text-lg"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="w-full h-100 md:w-1/2 lg:w-1/3">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="src/assets/images/self-01.jpg"
          />
        </div>
      </div>
    </section>
  );
}
