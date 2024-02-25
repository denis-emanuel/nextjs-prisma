import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";

import { Paper } from "@mui/material";

import formatPrice from "utils/format-price";

async function getData() {
  const data = await prisma.post.findMany({
    include: {
      images: true,
    },
  });

  return data;
}

export default async function Utilaje() {
  const data = await getData();

  return (
    <div className="w-full h-full pt-2">
      <h1 className="text-xl lg:text-3xl font-extrabold text-center text-gray-800 mb-3 lg:mb-5">
        Utilaje de vanzare
      </h1>

      <div className="w-full md:flex md:flex-row">
        {data.map((post) => (
          <div key={post.id} className="w-full lg:w-1/3 p-1 lg:px-5 mb-2">
            <Link href={`/utilaje/${post.id}`}>
              <Paper>
                <div
                  className="relative w-full h-0"
                  style={{ paddingTop: "100%" }}
                >
                  <Image
                    src={post?.images[0]?.url ?? "/no-image.jpg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
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
                    <div>
                      Data postarii:{" "}
                      {post.createdAt.toLocaleDateString("ro-RO")}
                    </div>
                    <div>
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
