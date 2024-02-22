import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function DesktopNav() {
  return (
    <>
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
    </>
  );
}
