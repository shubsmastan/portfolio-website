import React, { useState, useRef, useEffect } from "react";
import Projects from "./Projects";
import { projects } from "../data/project-data";

export default function Portfolio() {
  const timerRef = useRef(null);

  const [sliderIndex, setSliderIndex] = useState(0);

  const prevIndex = () => {
    const prevIndex = sliderIndex === 0 ? projects.length - 1 : sliderIndex - 1;
    setSliderIndex(prevIndex);
  };

  const nextIndex = () => {
    const nextIndex = sliderIndex === projects.length - 1 ? 0 : sliderIndex + 1;
    setSliderIndex(nextIndex);
  };

  const goToSlide = (index) => {
    setSliderIndex(index);
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      nextIndex();
    }, 3250);
    return () => {
      clearTimeout(timerRef.current);
    };
  });

  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center py-20 bg-mauve text-gray-800 text-lg font-josefin-sans lg:text-xl"
    >
      <div className="container px-5 py-10 mx-auto text-center xl:px-40">
        <h1 className="text-4xl sm:text-5xl font-medium mb-8">My Portfolio</h1>
        <Projects
          sliderIndex={sliderIndex}
          projects={projects}
          handleClickPrev={prevIndex}
          handleClickNext={nextIndex}
          handleDotClick={(e) =>
            goToSlide(parseInt(e.target.parentNode.dataset.index))
          }
        />
      </div>
    </section>
  );
}
