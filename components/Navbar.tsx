import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { DropdownLanguage } from "./DropdownLanguage";

interface Props {
  openMenu: () => void;
}

const SECTIONS = ["home", "about", "experience", "skills", "projects", "contact"];

const Navbar = ({ openMenu }: Props) => {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = SECTIONS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`w-full uppercase top-0 h-[8vh] fixed z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-purple-dark/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          : "bg-purple-dark"
      }`}
    >
      <div className="flex items-center justify-between mx-auto h-full px-6 md:px-8 w-full lg:px-32">

        <h1 className="flex-[0.8] cursor-pointer text-4xl text-white font-azeret">
          <span className="failure-shadow">JULIA</span>
          <span className="ml-1 text-glitter font-oswald font-light text-fuchsia text-2xl">
            .dev
          </span>
        </h1>

        {SECTIONS.map((section) => (
          <div key={section} className="nav-link hidden lg:block relative group">
            <Link
              href={`#${section}`}
              className={`transition-colors duration-200 text-sm xl:text-base ${
                active === section ? "text-fuchsia" : "text-white hover:text-fuchsia"
              }`}
            >
              {t(section)}
            </Link>
            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-fuchsia rounded-full transition-all duration-300 ${
                active === section ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </div>
        ))}

        <DropdownLanguage />

        <div onClick={openMenu} className="lg:hidden">
          <HiBars3 className="w-8 h-8 cursor-pointer text-purple-400 hover:text-fuchsia transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;