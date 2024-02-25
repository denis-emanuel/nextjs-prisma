import { useEffect, useRef, useState } from "react";

import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import NavLink from "./nav-link";
import { NavbarItems } from "types/constants/navbar";

export default function MobileNav() {
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
    <div ref={mobileMenuRef} onClick={toggleMobileMenu}>
      <DensityMediumSharpIcon className="inline-block cursor-pointer lg:hidden" />

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden z-10 absolute top-14 right-0`}
      >
        <ul className="flex flex-col items-center border divide-y divide-white">
          {NavbarItems.map((item, index) => (
            <li key={index} className="py-2 w-full px-3 bg-black">
              <NavLink href={item.href} name={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
