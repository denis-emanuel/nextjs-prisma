"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <nav className="flex justify-between items-center py-3 px-10 italic font-serif bg-black font-bold text-white">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo3.jpg"
          alt="logo"
          width={35}
          height={35}
          className="rounded-full"
        />
        <span className="hidden lg:block ml-2">All Inclusive Special</span>{" "}
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="font-bold text-white"
        >
          <Link href="/">Prima pagina</Link>
          <Link href="/utilaje">Utilaje</Link>
          <Link href="/contact">Contact</Link>
        </Breadcrumbs>
      </ul>

      <div ref={mobileMenuRef} onClick={toggleMobileMenu}>
        <DensityMediumSharpIcon className="inline-block cursor-pointer lg:hidden" />

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:hidden z-10 absolute top-14 right-0 w-3/5 bg-black`}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                href="/"
                className="text-white"
                // onClick={() => setIsMobileMenuOpen(false)}
              >
                Prima pagina
              </Link>
            </li>
            <li>
              <Link
                href="/utilaje"
                className="text-white"
                // onClick={() => setIsMobileMenuOpen(false)}
              >
                Utilaje
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white"
                // onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
