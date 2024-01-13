import React from "react";
import { HiBars3 } from "react-icons/hi2";


interface Props {
  openMenu: () => void;
}
const Navbar = ({openMenu} : Props) => {
  return (
    <div className="w-[100%] top-0 h-[8vh] bg-[#300754] fixed z-[1000]">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.8] cursor-pointer text-4xl	 text-white font-azeret" >
               <span className="failure-shadow">JULIA
                </span> 
                <span className="ml-1 text-glitter font-oswald font-light text-[#DB00FF] text-2xl		uppercase">.dev</span>
            </h1>
            <div className="nav-link">HOME</div>
            <div className="nav-link">ABOUT ME</div>
            <div className="nav-link">SKILLS</div>
            <div className="nav-link">PROJECTS</div>
            <div className="nav-link">CONTACT ME</div>

            <div onClick={openMenu}>
              <HiBars3  className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-purple-400"/>
            </div>

        </div>
    </div>
  )
}

export default Navbar;
