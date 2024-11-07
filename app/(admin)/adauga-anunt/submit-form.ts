"use server";

import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prisma";
import { ListingType } from "@prisma/client";

import uploadImage from "@/app/actions/upload-image";
import { getLoggedInUser, isUserAdmin } from "@/app/actions/user";
import { Success } from "types/success";

export default async function newPostSubmit(
  formData: FormData
): Promise<Success | Error> {
  const user = await getLoggedInUser();
  if (!user) {
    throw new Error("Trebuie sa fii logat pentru a adauga anunturi");
  }

  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    throw new Error("Nu ai acces sa adaugi anunturi");
  }

  console.log(formData.get("listingType"));

  // create post transaction
  const postId = uuidv4();
  const createPost = prisma.post.create({
    data: {
      id: postId,
      title: formData.get("title") as string,
      price: Number(formData.get("price")),
      listingType: formData.get("listingType") as ListingType,
      description: formData.get("description") as string,
      authorId: user.id,
    },
  });

  // create all images in the db + upload
  const files = formData.getAll("files") as File[];
  const promises: Promise<Response>[] = [];
  const imageIds: string[] = [];
  for (const file of files) {
    const imageId = uuidv4();
    const imageName = `${postId}/${imageId}`;
    const upload = uploadImage(imageName, file);
    promises.push(upload);
    imageIds.push(imageId);
  }

  const imageUploads = await Promise.all(promises);
  for (const upload of imageUploads) {
    if (!upload.ok) {
      throw new Error("Eroare la incarcarea imaginii");
    }
  }

  const createImages = prisma.image.createMany({
    data: imageIds.map((imageId) => ({
      id: imageId,
      url: `https://storage.googleapis.com/${process.env.GOOGLE_CLOUD_BUCKET_NAME}/${postId}/${imageId}`,
      postId,
    })),
  });

  const res = await prisma.$transaction([createPost, createImages]);
  if (!res) {
    throw new Error("Eroare la crearea anuntului");
  }

  return { success: true };
}
