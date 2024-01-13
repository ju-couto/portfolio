import React from "react";
import {
  IoHeadsetOutline,
  IoAirplaneOutline,
  IoBookOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import HobbyCard from "@/components/HobbyCard";

const About = () => {
  const interests = [
    { icon: <IoHeadsetOutline className="icon-hobby" />, label: "Music" },
    { icon: <IoAirplaneOutline className="icon-hobby" />, label: "Travel" },
    { icon: <IoBookOutline className="icon-hobby" />, label: "Read" },
    { icon: <IoHeartOutline className="icon-hobby" />, label: "Family" },
  ];

  return (
    <div className="bg-purple-darkest  md:py-[9rem]  text-white section">
      <div className="mx-auto w-[80%] flex flex-col items-center">
        <h2 className="text-cabin text-4xl md:text-5xl uppercase font-extrabold md:self-start">
          ABOUT ME
        </h2>
        <p className="mt-6 font-opensans text-center md:w-[80%] text-lg">
          <span className="text-purple-light font-semibold ">Hello! I'm Julia.</span> I'm a
          FullStack developer passionate about turning ideas into amazing
          digital solutions. With experience working directly with clients, I
          have a solid understanding of their needs and expectations, and I'm
          committed to delivering results that exceed their expectations.
        </p>
        <div className="flex justify-center flex-col md:flex-row lg:gap-20 md:gap-0 gap-10 mt-20  ">
          <div className="grid grid-cols-[auto_auto] gap-1 md:gap-2 lg:gap-3 mt-0 md:mt-10 text-lg">
            <div className="text-purple-light font-bold">
              <p className="row-start-1">Birthdate:</p>
              <p className="row-start-2">Phone:</p>
              <p className="row-start-3">Email:</p>
            </div>
            <div>
              <p className="row-start-1">03•04•2000</p>
              <p className="row-start-2">+55 12 98803-8009</p>
              <p className="row-start-3">jcouto.dev@gmail.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-cabin text-3xl md:text-2xl uppercase font-extrabold md:text-start text-center">
              My Interests
            </h3>
            <div className="flex gap-3 mt-4 md:mx-10 justify-center">
              {interests.map((interest, index) => (
                <HobbyCard key={index} {...interest} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className="flex gap-2 text-lg border-violet border-2 rounded-md p-3 font-medium hover:bg-purple-blue hover:scale-105 hover:text-white transition-all duration-300 ease-in-out">
            <span>Download CV</span>
            <MdSaveAlt className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
