import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";

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
        } lg:hidden z-10 absolute top-14 right-0 w-3/5 bg-black`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link href="/" className="text-white">
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
  );
}
