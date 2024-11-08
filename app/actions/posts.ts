import prisma from "@/lib/prisma";

export async function getPosts(orderBy: "asc" | "desc" = "desc") {
  const data = await prisma.post.findMany({
    include: {
      images: true,
    },
    orderBy: {
      createdAt: orderBy,
    },
  });

  return data;
}
