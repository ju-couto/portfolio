import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Skill = {
  imgSrc: string;
  altText: string;
  label: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const SkillCard = ({ imgSrc, altText, label }: Skill) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-dark border border-purple-light/30 group-hover:border-violet group-hover:bg-purple-dark/80 transition-all duration-300 p-2">
      <Image
        src={imgSrc}
        alt={altText}
        width={40}
        height={40}
        className="w-8 h-8 object-contain"
      />
    </div>
    <span className="text-white/80 text-xs font-opensans group-hover:text-white transition-colors duration-300">
      {label}
    </span>
  </div>
);
const Skills = () => {
  const t = useTranslations("Skills");

  const categories: SkillCategory[] = [
    {
      title: t("frontend"),
      skills: [
        { imgSrc: "/images/icons/html.svg", altText: "html", label: "HTML" },
        { imgSrc: "/images/icons/css.svg", altText: "css", label: "CSS" },
        { imgSrc: "/images/icons/js.svg", altText: "js", label: "JavaScript" },
        { imgSrc: "/images/icons/ts.svg", altText: "ts", label: "TypeScript" },
        { imgSrc: "/images/icons/react.svg", altText: "react", label: "React" },
        { imgSrc: "/images/icons/next-js.svg", altText: "next", label: "Next.js" },
        { imgSrc: "/images/icons/sass.svg", altText: "sass", label: "Sass" },
        { imgSrc: "/images/icons/tailwind.svg", altText: "tailwind", label: "Tailwind" },
      ],
    },
    {
      title: t("backend"),
      skills: [
        { imgSrc: "/images/icons/node-js.svg", altText: "node", label: "Node.js" },
        { imgSrc: "/images/icons/ruby.svg", altText: "ruby", label: "Ruby" },
        { imgSrc: "/images/icons/rails.svg", altText: "rails", label: "Rails" },
        { imgSrc: "/images/icons/mysql.svg", altText: "mysql", label: "MySQL" },
        { imgSrc: "/images/icons/postgresql.svg", altText: "postgresql", label: "PostgreSQL" },
      ],
    },
    {
      title: t("tools"),
      skills: [
        { imgSrc: "/images/icons/git.svg", altText: "git", label: "Git" },
        { imgSrc: "/images/icons/github.svg", altText: "github", label: "GitHub" },
      ],
    },
    {
      title: t("ai"),
      skills: [
        { imgSrc: "/images/icons/claude.svg", altText: "claude", label: "Claude" },
        { imgSrc: "/images/icons/cursor.svg", altText: "cursor", label: "Cursor" },
        { imgSrc: "/images/icons/githubcopilot.svg", altText: "copilot", label: "GitHub Copilot" },
      ],
    },
  ];

  return (
    <div className="bg-purple-darkest md:py-[7rem] py-20 text-white section" id="skills">
      <div className="mx-auto w-[80%] flex flex-col items-center">
        <h2
          data-aos="fade-down"
          className="text-cabin text-4xl md:text-5xl uppercase font-extrabold md:self-start self-center"
        >
          {t("title")}
        </h2>

        <div className="flex flex-col gap-12 mt-12 w-full">
          {categories.map((cat, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-purple-light font-opensans font-semibold text-sm uppercase tracking-widest">
                  {cat.title}
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-light/30 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-6">
                {cat.skills.map((skill, j) => (
                  <SkillCard key={j} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;