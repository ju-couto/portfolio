import { BR, US } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { HiXMark } from "react-icons/hi2";

interface Props {
  nav: boolean;
  closeMenu: () => void;
}
const MobileMenu = ({ nav, closeMenu }: Props) => {
  const t = useTranslations("Navbar");

  const animation = nav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`fixed ${animation} transform uppercase translation-all duration-300 top-0 right-0 left-0 bottom-0 z-[10000] bg-purple-dark`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">
          <Link href="#home" onClick={closeMenu}>
            {t("home")}
          </Link>
        </div>
        <div className="nav-link-mobile">
          <Link href="#about" onClick={closeMenu}>
            {t("about")}
          </Link>
        </div>
        <div className="nav-link-mobile">
          <Link href="#skills" onClick={closeMenu}>
            {t("skills")}
          </Link>
        </div>
        <div className="nav-link-mobile">
          <Link href="#projects" onClick={closeMenu}>
            {t("projects")}
          </Link>
        </div>
        <div className="nav-link-mobile">
          <Link href="#contact" onClick={closeMenu}>
            {t("contact")}
          </Link>
        </div>

        <div className="flex space-x-4 mt-4">
          <Link
            href="/"
            locale="en-US"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <US title="US" className="w-12 h-12" />
          </Link>
          <Link
            href="/"
            locale="pt-BR"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <BR title="BR" className="w-12 h-12" />
          </Link>
        </div>
      </div>
      <div
        onClick={closeMenu}
        className="absolute cursor-pointer top-[2rem] right-[2rem]  text-purple-400"
      >
        <HiXMark className="w-[2rem] h-[2rem]" />
      </div>
    </div>
  );
};

export default MobileMenu;
