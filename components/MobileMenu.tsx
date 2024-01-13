import React from "react";
import { HiXMark } from "react-icons/hi2";

interface Props {
  nav: boolean;
  closeMenu: () => void;
}
const MobileMenu = ({ nav, closeMenu }: Props) => {
  const animation = nav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div
      className={`fixed ${animation} transform translation-all duration-300 top-0 right-0 left-0 bottom-0 z-[10000] bg-[#300754]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">HOME</div>
        <div className="nav-link-mobile">ABOUT ME</div>
        <div className="nav-link-mobile">SKILLS</div>
        <div className="nav-link-mobile">PROJECTS</div>
        <div className="nav-link-mobile">CONTACT ME</div>
      </div>
      <div
        onClick={closeMenu}
        className="absolute cursor-pointer top-[2rem] right-[2rem]  text-purple-400"
      >
        <HiXMark  className="w-[2rem] h-[2rem]"/>
      </div>
    </div>
  );
};

export default MobileMenu;
