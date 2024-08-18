import { BR, US } from "country-flag-icons/react/3x2";
import { useEffect, useRef, useState } from "react";
import { HiGlobeAlt } from "react-icons/hi";
import Link from "next/link";

export const DropdownLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="hidden md:block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-12 h-8 bg-purple-800 bg-opacity-50 rounded-full justify-center items-center cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
      >
        <HiGlobeAlt className="text-white w-6 h-6 " />
      </button>
      <div
        className={`absolute bg-purple-800 rounded-lg p-2 mt-3 transform transition-all duration-300 ease-in-out bg-opacity-50 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
        onClick={() => setIsOpen(false)}
      >
        <Link
          className="block text-white  hover:text-purple-400 hover:scale-110 transition duration-300 ease-in-out"
          href="/"
          locale="en-US"
        >
          <US title="US" className="w-8 h-8" />
        </Link>

        <Link
          className="block text-white  hover:text-purple-400 hover:scale-110 transition duration-300 ease-in-out"
          href="/"
          locale="pt-BR"
        >
          <BR title="BR" className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};
