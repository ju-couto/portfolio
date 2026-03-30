import React from "react";
import { MdSaveAlt } from "react-icons/md";
import useDownloader from "react-use-downloader";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  const { download } = useDownloader();
  const fileUrl = t("srcPdf");
  const filename = "julia-couto-cv.pdf";

  return (
    <div
      className="bg-purple-darkest md:py-[9rem] text-white section"
      id="about"
    >
      <div className="mx-auto w-[80%] flex flex-col items-center">
        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center w-full"
        >
          <h2 className="uppercase text-cabin text-4xl md:text-5xl font-extrabold md:self-start self-center">
            {t("title")}
          </h2>

          <div className="mt-6 font-opensans md:w-[80%] text-lg flex flex-col gap-4 md:self-start">
            <p>
              <span className="text-purple-light font-bold">
                {t("introduction")}
              </span>{" "}
              {t("introductionText")}
            </p>
            <p>{t("paragraphTwo")}</p>
            <p>{t("paragraphThree")}</p>
          </div>
        </div>

        <div className="mt-10 md:self-start" data-aos="fade-up">
          <button
            onClick={() => download(fileUrl, filename)}
            className="cursor-pointer flex gap-2 text-lg border-violet border-2 rounded-md p-3 font-medium hover:bg-purple-blue hover:scale-105 hover:text-white transition-all duration-300 ease-in-out"
          >
            <span>{t("download")}</span>
            <MdSaveAlt className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;