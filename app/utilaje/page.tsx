import prisma from "@/lib/prisma";
import { Paper } from "@mui/material";
import Image from "next/image";

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
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex space-x-3">utilaje</div>
      {data.map((post) => (
        <Paper key={post.id} className="h:lg-100vh">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          {post.images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt={image.id}
              width={48}
              height={48}
            />
          ))}
        </Paper>
      ))}
    </div>
  );
}
