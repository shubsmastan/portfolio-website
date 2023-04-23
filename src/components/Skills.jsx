import React, { useState } from "react";
import { projects, skills } from "../data/project-data";

export default function Skills() {
  return (
    <section
      id="portfolio"
      className="snap-start min-h-screen flex items-center py-20 bg-cream text-gray-800 text-lg font-josefin-sans lg:text-xl"
    >
      <div className="container px-5 py-10 mx-auto text-center xl:px-40">
        <div className="text-center mb-5">
          <h1 className="text-3xl sm:text-4xl mb-4">Tech Stack</h1>
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
