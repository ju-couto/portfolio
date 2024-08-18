import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { DropdownLanguage } from "./DropdownLanguage";

interface Props {
  openMenu: () => void;
}
const Navbar = ({ openMenu }: Props) => {
  const t = useTranslations("Navbar");

  return (
    <div className="w-[100%] uppercase top-0 h-[8vh] bg-purple-dark fixed z-[1000]">
      <div className="flex items-center justify-between  mx-auto h-[100%] px-6 md:px-8 w-[100%] lg:px-32">
        <h1 className="flex-[0.8] cursor-pointer text-4xl	 text-white font-azeret">
          <span className="failure-shadow">JULIA</span>
          <span className="ml-1 text-glitter font-oswald font-light text-fuchsia text-2xl">
            .dev
          </span>
        </h1>
        <div className="nav-link">
          <Link href="#home">{t("home")}</Link>
        </div>
        <div className="nav-link">
          <Link href="#about">{t("about")}</Link>
        </div>
        <div className="nav-link">
          <Link href="#skills">{t("skills")}</Link>
        </div>
        <div className="nav-link">
          <Link href="#projects">{t("projects")}</Link>
        </div>
        <div className="nav-link">
          <Link href="#contact">{t("contact")}</Link>
        </div>
        <DropdownLanguage />
        <div onClick={openMenu}>
          <HiBars3 className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
