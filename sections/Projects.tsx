import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "next-intl";
import React from "react";

const Projects = () => {
  const t = useTranslations("Projects");

  const emptyProject = {
    imageSrc: t("emptyImageSrc"),
    title: t("emptyTitle"),
    description: t("emptyDescription"),
  };

  const projectData = Array.from({ length: 6 }, (_, i) => emptyProject);

  return (
    <div
      className="bg-purple-darkest md:py-[9rem]  text-white justify-center section"
      id="projects"
    >
      <div className="flex flex-col items-center mx-0  justify-center w-[80%] ">
        <h2
          className="text-cabin text-4xl md:text-5xl uppercase font-extrabold md:self-start"
          data-aos="fade-down"
        >
          {t("title")}
        </h2>
        <div
          className="flex flex-wrap justify-center gap-8 mt-10 "
          data-aos="fade-down"
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
