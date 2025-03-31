import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <div
      className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center flex items-center justify-center"
      id="home"
    >
      <div
        data-aos="fade-in"
        className=" relative mt-[8rem]  flex flex-col items-center justify-center bg-purple-dark rounded-3xl md:px-12 pt-[8rem] md:pt-[7rem] px-6 pb-6"
      >
        <Image
          width={250}
          height={250}
          src="/images/profile.png"
          alt="profile"
          className="absolute bottom-[10rem] md:bottom-[10rem] rounded-full h-[250px] sm:w-[250px]  border-4 border-fuchsia"
        />
        <h1 className="text-5xl uppercase text-white font-cabin text-center font-extrabold">
          Julia Couto
        </h1>
        <h2 className="text-lg text-white font-opensans text-center">
          {t("position")}
        </h2>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/ju-couto"
            target="_blank"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              width={50}
              height={50}
              src="/images/icons/github.svg"
              alt="github"
              className="size-9"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/juliamcouto/"
            target="_blank"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              width={50}
              height={50}
              src="/images/icons/linkedin.svg"
              alt="linkedin"
              className="size-9"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
