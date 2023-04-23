import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Projects(props) {
  return (
    <div className="relative flex flex-wrap mb-4">
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        onClick={props.handleClickPrev}
        className="absolute left-[10px] top-[260px] sm:left-[70px] md:left-[90px] lg:left-[120px] cursor-pointer hover:text-dark-rose focus:text-dark-rose active:text-2xl z-20 origin-center"
      />
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        onClick={props.handleClickNext}
        className="absolute right-[10px] top-[260px] sm:right-[70px] md:right-[90px] lg:right-[120px] cursor-pointer focus:text-dark-rose hover:text-dark-rose active:text-2xl z-20 origin-center"
      />
      {props.projects.map((project, index) => {
        return (
          <div
            className={
              index === props.sliderIndex
                ? "flex flex-col mx-auto w-100 sm:w-2/3 transition-opacity duration-1000 ease-in-out"
                : "flex flex-col mx-auto w-100 absolute sm:w-2/3 opacity-0"
            }
            key={project.title}
          >
            <img
              alt="gallery"
              className="w-full h-[250px] object-cover object-center rounded-t"
              src={project.image}
            />
            <div className="px-8 py-5 h-[200px] w-full bg-cream rounded-b">
              <h2 className="text-base font-bold mb-1">{project.subtitle}</h2>
              <h1 className="text-lg text-dark-rose font-bold font-large mb-3">
                <a href={project.link} target="_blank">
                  {project.title}
                </a>
              </h1>
              <p className="text-base leading-relaxed">{project.description}</p>
            </div>
          </div>
        );
      })}
      <div className="absolute flex gap-2 right-1/2 translate-x-1/2 -bottom-[30px]">
        {props.projects.map((project, index) => {
          return (
            <FontAwesomeIcon
              onClick={props.handleDotClick}
              key={index}
              data-index={index}
              icon={faCircle}
              className={
                index === props.sliderIndex
                  ? "cursor-pointer text-xs text-dark-rose"
                  : "cursor-pointer text-xs text-gray-800"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
