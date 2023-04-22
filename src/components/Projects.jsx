import React from "react";
import { projects, skills } from "../data/project-data";

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="text-gray-800 bg-mauve body-font px-5 py-10 font-josefin-sans"
    >
      <div className="container mx-auto text-center lg:px-40 mb-10">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            My Portfolio
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are some examples of the projects I have created so far using
            the tech stacks below.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-800 bg-cream opacity-0 hover:opacity-100 rounded">
                  <h2 className="tracking-widest text-sm title-font font-bold mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg text-dark-rose font-bold font-large mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="container mx-auto text-gray-800">
        <div className="text-center mb-5">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full justify-center items-center">
                <p className="title-font font-medium text-cream">{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
