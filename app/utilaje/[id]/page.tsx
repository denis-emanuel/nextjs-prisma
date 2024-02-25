import { ImagesCarousel } from "@/components/carousel/index";
import prisma from "@/lib/prisma";

type UtilajProps = {
  params: { id: string };
};

async function getData(id: string) {
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

export default async function Utilaj({ params }: UtilajProps) {
  const data = await getData(params.id);
  const imageUrls = data?.images.map((image) => image.url);

  return (
    <div className="w-screen h-screen mx-auto pt-2 px-2 md:px-10 lg:px-20">
      <div className="w-full md:w-3/4 h-1/2 md:h-3/5 relative mx-auto">
        <ImagesCarousel imageUrls={imageUrls ?? []} />
      </div>
    </div>
  );
}
