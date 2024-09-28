"use server";

import prisma from "@/lib/prisma";

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
}

export async function markPostAsSold(id: string) {
  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      sold: true,
    },
  });
}
