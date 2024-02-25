import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  const pathname = usePathname();
  const navPath = getNavBarPath(pathname);

  return (
    <Link href={href} className={`${navPath === href && "text-primary-dark"}`}>
      {name}
    </Link>
  );
}

function getNavBarPath(pathname: string) {
  if (pathname === "/") {
    return "/";
  }

  const firstPath = pathname.split("/")[1].toLowerCase();

  return "/" + firstPath;
}
