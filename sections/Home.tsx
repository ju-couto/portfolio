import React from "react";

const Home = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className=" relative mt-[8rem]  flex flex-col items-center justify-center bg-purple-dark rounded-3xl md:px-12 pt-[8rem] md:pt-[7rem] px-6 pb-6">
        <img
          src="/images/profile.png"
          className="absolute bottom-[10rem] md:bottom-[12rem] rounded-full h-[250px] sm:w-[250px]  border-4 border-fuchsia"
        />
        <h1 className="text-5xl text-white font-cabin text-center font-extrabold">
          JULIA COUTO
        </h1>
        <h2 className="text-lg text-white font-opensans text-center">
          Full Stack Developer
        </h2>

      <div className="flex justify-center gap-4 mt-4">
        <img src="/images/icons/github.svg" alt="github" className="size-9" />
        <img src="/images/icons/linkedin.svg" alt="linkedin" className="size-9" />
      </div>
      </div>
    </div>
  );
};

export default Home;
