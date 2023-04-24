import React, { useState } from "react";
import { projects, skills } from "../data/project-data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 bg-cream text-gray-800 text-lg font-josefin-sans lg:text-xl"
    >
      <div className="container px-5 py-10 mx-auto text-center xl:px-40">
        <h1 className="text-4xl sm:text-5xl font-medium mb-8">Tech Stack</h1>
        <div className="flex flex-wrap mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="w-1/2 sm:w-1/5">
              <img className="m-auto" src={skill.icon} alt="gallery" />
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}