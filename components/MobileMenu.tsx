import { BR, US } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { HiXMark } from "react-icons/hi2";

interface Props {
  nav: boolean;
  closeMenu: () => void;
}

const SECTIONS = ["home", "about", "experience", "skills", "projects", "contact"];

const MobileMenu = ({ nav, closeMenu }: Props) => {
  const t = useTranslations("Navbar");
  const animation = nav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`fixed ${animation} transform uppercase transition-all duration-300 top-0 right-0 left-0 bottom-0 z-[10000] bg-purple-dark/55 backdrop-blur-md lg:hidden`}
    >
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">

        {SECTIONS.map((section) => (
          <div key={section} className="nav-link-mobile">
            <Link
              href={`#${section}`}
              onClick={closeMenu}
              className="hover:text-fuchsia transition-colors duration-200"
            >
              {t(section)}
            </Link>
          </div>
        ))}

        <div className="flex space-x-4 mt-8">
          <Link
            href="/"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <US title="US" className="w-12 h-12" />
          </Link>
          <Link
            href="/pt-BR"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <BR title="BR" className="w-12 h-12" />
          </Link>
        </div>
      </div>

      <div
        onClick={closeMenu}
        className="absolute cursor-pointer top-8 right-8 text-purple-400 hover:text-fuchsia transition-colors duration-200"
      >
        <HiXMark className="w-8 h-8" />
      </div>
    </div>
  );
};

export default MobileMenu;