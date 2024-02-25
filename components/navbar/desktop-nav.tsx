import Breadcrumbs from "@mui/material/Breadcrumbs";

import { NavbarItems } from "types/constants/navbar";
import NavLink from "./nav-link";

import CircleIcon from "@mui/icons-material/Circle";

export default function DesktopNav() {
  return (
    <>
      <ul className="hidden h-full gap-12 lg:flex">
        <Breadcrumbs
          separator={<CircleIcon fontSize="small" className="square h-2" />}
          aria-label="breadcrumb"
          className="font-bold text-white"
        >
          {NavbarItems.map((item, index) => (
            <NavLink key={index} href={item.href} name={item.name} />
          ))}
        </Breadcrumbs>
      </ul>
    </>
  );
}
