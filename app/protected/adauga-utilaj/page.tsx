import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CreateUtilaj() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div className="container mx-auto pt-5">
      <span>sal {session.user?.email}</span>
    </div>
  );
}
