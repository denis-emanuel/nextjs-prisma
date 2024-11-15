import prisma from "@/lib/prisma";
import { ListingType } from "@prisma/client";

export async function getPosts(orderBy: "asc" | "desc" = "desc") {
  const data = await prisma.post.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      images: true,
    },
    orderBy: {
      createdAt: orderBy,
    },
  });

  return data;
}

export async function getLastPostByListingType(listingType: ListingType) {
  const data = await prisma.post.findFirst({
    where: {
      listingType: listingType,
      deletedAt: null,
    },
    include: {
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
