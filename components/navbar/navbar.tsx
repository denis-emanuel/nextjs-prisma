"use client";

import Link from "next/link";
import Image from "next/image";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar = () => {
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

      <div>
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
