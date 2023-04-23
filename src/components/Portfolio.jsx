import React, { useState } from "react";
import { projects, skills } from "../data/project-data";

export default function Portfolio() {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <section
      id="portfolio"
      className="snap-start min-h-screen flex items-center py-20 bg-mauve text-gray-800 text-lg font-josefin-sans lg:text-xl"
    >
      <div className="container px-5 py-10 mx-auto text-center xl:px-40">
        <div className="flex flex-col w-full mb-10">
          <h1 className="text-4xl sm:text-5xl font-medium title-font mb-4">
            My Portfolio
          </h1>
          <p className="mx-auto leading-relaxed w-2/3">
            These are some examples of the projects I have created so far using
            the languages and frameworks listed below.
          </p>
        </div>
        <div className="flex flex-wrap mb-4">
          {projects.map((project) => (
            <div
              className="relative p-4 flex w-100 sm:w-1/2 z-0"
              key={project.title}
            >
              <div className="absolute inset-0 w-full h-full p-4">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded"
                  src={project.image}
                />
              </div>
              <div className="px-8 py-10 z-10 w-full border-2 border-gray-800 bg-cream opacity-0 rounded hover:opacity-100">
                <h2 className="text-base font-bold mb-1">{project.subtitle}</h2>
                <h1 className="text-lg text-dark-rose font-bold font-large mb-3">
                  <a href={project.link} target="_blank">
                    {project.title}
                  </a>
                </h1>
                <p className="text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-4xl mb-4">Tech Stack</h2>
        </div>
        <div className="flex flex-wrap mx-auto mb-2">
          {skills.map((skill) => (
            <div key={skill} className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="bg-gray-800 flex justify-center items-center p-4 rounded">
                <p className="text-lg text-cream">{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
