import Carousel from "@/components/carousel";
import prisma from "@/lib/prisma";
import { Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
    <div className="w-screen h-screen flex flex-col px-8 pt-2">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
        Utilaje de vanzare
      </h1>

      {data.map((post) => (
        <Paper key={post.id} className="w-full h-5/12 py-3 px-4">
          <div className="flex justify-between h-full">
            <div className="h-max w-2/4 flex flex-col space-between ">
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <p>Pret: {post.price} &euro;</p>
                <p>
                  <Link
                    href={`/utilaje/${post.id}`}
                    className="text-blue-500 underline hover:text-blue-700 hover:underline"
                  >
                    Mai multe detalii
                  </Link>
                </p>
              </div>
              <div>
                <p className="mt-2">
                  <span className="italic text-gray-500">
                    Data postarii: {post.createdAt.toLocaleDateString("ro-RO")}
                  </span>
                  <span className="mx-2">|</span>
                  <span className="italic text-gray-500">
                    Ultima actualizare:{" "}
                    {post.updatedAt.toLocaleDateString("ro-RO")}
                  </span>
                </p>
              </div>
            </div>
            <div className="h-3/4 w-1/4">
              <Carousel imageUrls={post.images.map((image) => image.url)} />
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
}
