"use server";

import uploadImage from "@/app/actions/upload-image";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

export default async function onNewPostSubmit(
  prevState: any,
  formData: FormData
) {
  // create post transaction
  const postId = uuidv4();
  const createPost = prisma.post.create({
    data: {
      id: postId,
      title: formData.get("title") as string,
      price: Number(formData.get("price")),
      description: formData.get("description") as string,
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
      throw new Error("Failed to upload images");
    }
  }

  const createImages = prisma.image.createMany({
    data: imageIds.map((imageId) => ({
      id: imageId,
      url: `https://storage.googleapis.com/${process.env.GOOGLE_CLOUD_BUCKET_NAME}/${postId}/${imageId}`,
      postId,
    })),
  });

  await prisma.$transaction([createPost, createImages]);

  return null;
}
