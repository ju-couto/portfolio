import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Home from "@/sections/Home";
import Skills from "@/sections/Skills";
import React, { useState } from "react";

const Index = () => {
  const [nav, setNav] = useState(false);

  const openMenu = () => setNav(true);
  const closeMenu = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileMenu nav={nav} closeMenu={closeMenu} />
        <Navbar openMenu={openMenu} />

        {/* Home Section*/}
        <Home />

        {/* About Section*/}
        <About />

          {/*Skills Section */}
          <Skills />
      </div>
    </div>
  );
};

export default Index;
