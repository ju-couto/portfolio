import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Home from "@/sections/Home";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


const Index = () => {
  const [nav, setNav] = useState(false);

  const openMenu = () => setNav(true);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className="overflow-x-hidden ">
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

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default Index;
