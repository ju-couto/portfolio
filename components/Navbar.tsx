import React from "react";

const Navbar = () => {
  return (
    <div className="w-100 top-0 h-[8vh] bg-[#300754] text-white">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-2xl font-azeret">
                JULIA
                <span>.dev</span>
            </h1>
            <div className="nav-link">HOME</div>
            <div className="nav-link">ABOUT ME</div>
            <div className="nav-link">SKILLS</div>
            <div className="nav-link">PROJECTS</div>
            <div className="nav-link">CONTACT ME</div>

        </div>
    </div>
  )
}

export default Navbar;
