import React from "react";
import SkillItem from "@/components/SkillItem";

const Skills = () => {
  const skillsData = [
    { imgSrc: "/images/icons/html.svg", altText: "html", tooltipText: "HTML" },
    { imgSrc: "/images/icons/css.svg", altText: "css", tooltipText: "CSS" },
    { imgSrc: "/images/icons/js.svg", altText: "js", tooltipText: "JS" },
    {
      imgSrc: "/images/icons/ts.svg",
      altText: "ts",
      tooltipText: "TypeScript",
    },
    {
      imgSrc: "/images/icons/react.svg",
      altText: "react",
      tooltipText: "React",
    },
    {
      imgSrc: "/images/icons/node-js.svg",
      altText: "node",
      tooltipText: "Node",
    },
    { imgSrc: "/images/icons/ruby.svg", altText: "ruby", tooltipText: "Ruby" },
    {
      imgSrc: "/images/icons/rails.svg",
      altText: "rails",
      tooltipText: "Rails",
    },
    { imgSrc: "/images/icons/sass.svg", altText: "sass", tooltipText: "Sass" },
    {
      imgSrc: "/images/icons/tailwind.svg",
      altText: "tailwind",
      tooltipText: "Tailwind",
    },
    {
      imgSrc: "/images/icons/mysql.svg",
      altText: "mysql",
      tooltipText: "MySql",
    },
    {
      imgSrc: "/images/icons/postgresql.svg",
      altText: "postgresql",
      tooltipText: "PostgreSQL",
    },
    { imgSrc: "/images/icons/git.svg", altText: "git", tooltipText: "Git" },
    {
      imgSrc: "/images/icons/github.svg",
      altText: "github",
      tooltipText: "GitHub",
    },
  ];

  return (
    <div className="bg-purple-darker md:py-[7rem]  text-white section">
      <div className="mx-auto w-[80%] flex flex-col items-center">
        <h2 className="text-cabin text-4xl md:text-5xl uppercase font-extrabold">
          SKILLS
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
