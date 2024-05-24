import prisma from "@/lib/prisma";

export async function getPosts() {
  const data = await prisma.post.findMany({
    include: {
      images: true,
    },
  });

  return data;
}

export async function createPost(prevState: any, formData: FormData) {
  // TODO
}
