import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";

type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  techs: string[];
};

const CollapsePanel = ({ open, children }: { open: boolean; children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        maxHeight: open ? (ref.current?.scrollHeight ?? 1000) : 0,
        overflow: "hidden",
        transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};

const Experience = () => {
  const t = useTranslations("Experience");
  const [expanded, setExpanded] = useState<number | null>(0);

  const experiences: Experience[] = [
    {
      role: t("exp1.role"),
      company: t("exp1.company"),
      period: t("exp1.period"),
      bullets: [t("exp1.b1"), t("exp1.b2"), t("exp1.b3"), t("exp1.b4")],
      techs: ["React", "Node", "TypeScript", "AWS", "Emotion", "DynamoDB", "Jest"],
    },
    {
      role: t("exp2.role"),
      company: t("exp2.company"),
      period: t("exp2.period"),
      bullets: [t("exp2.b1"), t("exp2.b2"), t("exp2.b3")],
      techs: ["React", "Koa.js", "TypeScript", "Python", "AWS", "MySQL", "Jest"],
    },
    {
      role: t("exp3.role"),
      company: t("exp3.company"),
      period: t("exp3.period"),
      bullets: [t("exp3.b1"), t("exp3.b2"), t("exp3.b3"), t("exp3.b4")],
      techs: ["React", "TypeScript", "Ruby on Rails", "Python", "MySQL", "PostgreSQL", "Vue"],
    },
  ];

  return (
    <div className="bg-purple-darker md:py-[9rem] py-20 text-white section" id="experience">
      <div className="mx-auto w-[80%] flex flex-col items-center">
        <h2
          data-aos="fade-down"
          className="uppercase text-cabin text-4xl md:text-5xl font-extrabold md:self-start self-center mb-16"
        >
          {t("title")}
        </h2>

        <div className="relative w-full">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet via-purple-light to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative pl-10 md:pl-20"
              >
                <div
                  className={`absolute left-[-5px] md:left-[17px] top-1 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                    expanded === i ? "bg-violet border-violet" : "bg-purple-darkest border-purple-light"
                  }`}
                />

                <div
                  className={`rounded-xl border transition-colors duration-300 cursor-pointer ${
                    expanded === i
                      ? "border-violet bg-purple-dark"
                      : "border-purple-light/20 bg-purple-dark/40 hover:border-purple-light/50"
                  }`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 p-5 md:p-6">
                    <div>
                      <h3 className="text-cabin font-extrabold text-xl md:text-2xl text-white">
                        {exp.role}
                      </h3>
                      <span className="text-purple-light font-semibold font-opensans text-sm md:text-base">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/50 font-opensans text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span
                        className={`text-purple-light transition-transform duration-300 text-lg ${
                          expanded === i ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </div>
                  </div>

                  <CollapsePanel open={expanded === i}>
                    <div className="px-5 pb-6 md:px-6 flex flex-col gap-4 border-t border-purple-light/10 pt-4">
                      <ul className="flex flex-col gap-2 font-opensans text-white/80 text-sm md:text-base">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="text-purple-light mt-1 shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.techs.map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs font-opensans font-medium px-3 py-1 rounded-full bg-violet/20 border border-violet/40 text-purple-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CollapsePanel>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;