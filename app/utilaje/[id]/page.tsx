import { ImagesCarousel } from "@/components/carousel/index";
import prisma from "@/lib/prisma";
import { Paper } from "@mui/material";
import { ResolvingMetadata } from "next";

type UtilajProps = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: UtilajProps,
  parent: ResolvingMetadata
) {
  const id = params.id;

  const data = await getData(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const imageUrls =
    data?.images
      .filter((image) => image.url !== null)
      .map((image) => image.url) ?? [];

  return {
    title: data?.title ?? "Utilaj",
    openGraph: {
      images: [...imageUrls, ...previousImages],
    },
  };
}

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
  const imageUrls = data?.images
    .filter((image) => image.url !== null)
    .map((image) => image.url);

  return (
    <div className="w-screen h-screen mx-auto pt-2 px-2 md:px-10 lg:px-20">
      <div className="w-full md:w-3/4 h-1/2 md:h-3/5 relative mx-auto">
        <ImagesCarousel imageUrls={imageUrls ?? []} />
        <Paper className="mt-8 lg:mt-10">
          <div className="p-2 lg:px-5 lg:py-3 divide-y-2 space-y-4">
            <div className="space-y-1">
              <div className="mt-2 italic text-gray-500 text-sm">
                <div>{data?.createdAt.toLocaleDateString("ro-RO")}</div>
              </div>

              <h2 className="text-lg text-gray-800">
                {data?.title ?? "Titlu"}
              </h2>

              <div className="text-green-600 font-bold text-xl">
                {data?.price ?? 0} &euro;
              </div>
            </div>

            <div className="tracking-tighter pt-4">
              <p className="mb-2">DESCRIERE</p>
              <p className="text-gray-800">{data?.description}</p>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
