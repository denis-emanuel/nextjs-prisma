import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavLink from "./nav-link";
import { NavbarItems } from "types/constants/navbar";

export default function DesktopNav() {
  return (
    <>
      <ul className="hidden h-full gap-12 lg:flex">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
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
