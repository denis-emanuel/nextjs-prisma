import { redirect } from "next/navigation";
import { getLoggedInUser, isUserAdmin } from "../actions/user";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    redirect("/");
  }

  return <div>{children}</div>;
}
