"use server";

import { isUserAdmin } from "@/app/actions/user";
import prisma from "@/lib/prisma";

export async function deletePost(id: string) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    throw new Error("You are not authorized to perform this action");
  }

  await prisma.post.delete({
    where: {
      id: id,
    },
  });
}

export async function markPostAsSold(id: string) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    throw new Error("You are not authorized to perform this action");
  }

  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      sold: true,
    },
  });
}
