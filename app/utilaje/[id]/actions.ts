"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { isUserAdmin } from "@/app/actions/user";
import prisma from "@/lib/prisma";

export async function deletePost(id: string) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    throw new Error("You are not authorized to perform this action");
  }

  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      deletedAt: new Date(),
    },
  });

  revalidatePath("/utilaje");
  redirect("/utilaje");
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

  revalidatePath("/utilaje");
  redirect("/utilaje");
}

export async function getData(id: string) {
  const data = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      images: true,
    },
  });

  return data;
}
