import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    technologies?: string[];
    githubLink?: string;
    projectLink?: string;
  }

  const ProjectCard = ({
    imageSrc,
    title,
    description,
    technologies,
    githubLink,
    projectLink,
  }: ProjectCardProps) => {
    return (
      <div className="md:w-[22rem] md:h-[26rem] h-[24rem] w-[18rem] relative bg-[#8B56BB] rounded-lg hover:scale-105 transition-all duration-300 ease-in-out group">
        <img src={imageSrc} alt="" className="rounded-t-md w-full" />
        <div className="p-4">
          <h3 className="font-opensas text-xl font-bold ">{title}</h3>
          <p className="font-opensas text-sm">{description}</p>
          <div className="flex gap-2 mt-4 text-xs flex-wrap">
            {technologies?.map((tech, index) => (
              <div
                key={index}
                className="bg-purple-950 rounded-lg px-2 py-1 font-bold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        {(githubLink || projectLink) && (
          <div className="invisible absolute bottom-0 w-full flex justify-center items-center gap-4 pb-4 h-full bg-purple-950  rounded-lg group-hover:visible transition-all duration-300 ease-in-out opacity-90">
            {projectLink && (
              <button className="p-2 rounded-full bg-purple-700 h-fit hover:scale-110 transition-all duration-300 ease-in-out opacity-70 hover:opacity-100">
                <MdRemoveRedEye className="w-6 h-6" />
              </button>
            )}
            {githubLink && (
              <button className="p-2 rounded-full bg-purple-700 h-fit hover:scale-110 transition-all duration-300 ease-in-out opacity-70 hover:opacity-100">
                <img
                  src="/images/icons/github.svg"
                  alt="github"
                  className="size-6"
                />
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  export default ProjectCard;