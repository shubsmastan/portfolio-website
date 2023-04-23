import React from "react";
import Projects from "./Projects";

export default function Portfolio() {
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
        <Projects />
      </div>
    </section>
  );
}
