import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { Paper } from "@mui/material";

import prisma from "@/lib/prisma";
import formatPrice from "utils/format-price";
import { Role } from "@prisma/client";

export const metadata: Metadata = {
  title: "Utilaje de vanzare",
  description: "Utilaje de vanzare",
  keywords: ["utilaje", "vanzare", "agricole", "constructii", "masinarii"],
};

async function getData() {
  const data = await prisma.post.findMany({
    include: {
      images: true,
    },
  });

  return data;
}

async function getUserRole(): Promise<Role | null> {
  const session = await getServerSession();

  if (!session || !session.user || !session.user.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return user?.role ?? null;
}

export default async function Utilaje() {
  const data = await getData();
  const userRole = await getUserRole();

  return (
    <div className="w-full h-full pt-2">
      <h1 className="text-xl lg:text-3xl font-extrabold text-center text-gray-800 mb-3 lg:mb-5">
        Utilaje de vanzare
      </h1>
      {userRole === "ADMIN" && (
        <Link href="/protected/adauga-utilaj">
          <button className="ml-5 md:absolute md:right-12 md:top-5 md:mt-12 md:mr-0 md:left-auto md:w-auto rounded-lg bg-primary p-2 font-bold text-center">
            ADAUGA
          </button>
        </Link>
      )}

      <div className="w-full md:flex md:flex-row">
        {data.map((post) => (
          <div key={post.id} className="w-full lg:w-1/3 p-1 lg:px-5 mb-2">
            <Link href={`/utilaje/${post.id}`}>
              <Paper className="border-l-4 border-orange-300">
                <div
                  className="relative w-full h-0"
                  style={{ paddingTop: "100%" }}
                >
                  <Image
                    src={post?.images[0]?.url ?? "/no-image.jpg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-tr-lg"
                  />
                </div>
                <div className="p-2 lg:p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {post.title}
                  </h3>

                  <p className="text-green-600 text-2xl">
                    {formatPrice(post.price)} &euro;
                  </p>

                  <div className="mt-2 italic text-gray-500 text-sm">
                    <div className="tracking-tight">
                      Data postarii:{" "}
                      {post.createdAt.toLocaleDateString("ro-RO")}
                    </div>
                    <div className="tracking-tight">
                      Ultima actualizare:{" "}
                      {post.updatedAt.toLocaleDateString("ro-RO")}
                    </div>
                  </div>
                </div>
              </Paper>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
