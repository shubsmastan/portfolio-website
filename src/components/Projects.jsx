import React, { useState } from "react";
import { projects } from "../data/project-data";

export default function Projects() {
  return (
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
            <p className="text-base leading-relaxed">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
