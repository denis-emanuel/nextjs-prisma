"use server";

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { Role } from "@prisma/client";

export async function getUserRole(): Promise<Role | null> {
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

export async function isUserAdmin(): Promise<boolean> {
  const role = await getUserRole();

  return role === "ADMIN";
}

export async function isUserAuthenticated(): Promise<boolean> {
  const role = await getUserRole();

  return role !== null;
}

export async function getLoggedInUser() {
  const session = await getServerSession();

  if (!session || !session.user || !session.user.email) {
    return null;
  }

  return prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
}
