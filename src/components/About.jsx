import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-cream font-josefin-sans">
      <div className="container mx-auto flex px-10 lg:px-20 py-10 md:gap-12 lg:gap-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-800">
            Hi, I'm Shoaib.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-800">
            I'm an aspiring frontend web developer.
          </p>
          <p className="mb-8 leading-relaxed text-gray-800">
            I am a London-based primary computer science teacher and have been
            working in education for almost ten years. After a rewarding career
            in teaching, I am now looking to move into software development.
          </p>
          <p className="mb-8 leading-relaxed text-gray-800">
            I am currently in the process of completing a full-stack software
            engineering bootcamp with{" "}
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
            . I am looking for a role where I will be able to use and develop
            the skills I have learnt so far.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-dark-rose border-0 py-2 px-6 hover:bg-dark-rose-hover rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 hover:bg-gray-700 rounded text-lg"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="md:w-1/3 w-5/6">
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
