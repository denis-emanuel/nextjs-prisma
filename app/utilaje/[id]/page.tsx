import { ResolvingMetadata } from "next";
import { Paper } from "@mui/material";

import { isUserAdmin } from "@/app/actions/user";
import { getData } from "./actions";
import formatPrice from "utils/format-price";
import { TVA } from "types/constants/price";

import { ImagesCarousel } from "@/components/carousel/index";
import { DeleteButton, MarkSoldButton } from "./post-buttons";

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

export default async function Utilaj({ params }: UtilajProps) {
  const data = await getData(params.id);
  const imageUrls = data?.images
    .filter((image) => image.url !== null)
    .map((image) => image.url);
  const isAdmin = await isUserAdmin();

  return (
    <div className="w-full min-h-screen mx-auto px-2 py-10 md:px-20 lg:px-40">
      <ImagesCarousel imageUrls={imageUrls ?? []} className="h-1/2" />

      <Paper className="mt-10 lg:mt-10">
        <div className="p-2 lg:px-5 lg:py-3 divide-y-2 space-y-4">
          <div className="space-y-1">
            <div className="mt-2 italic text-gray-500 text-sm">
              <div>{data?.createdAt.toLocaleDateString("ro-RO")}</div>
            </div>

            <h2 className="text-lg text-gray-800">{data?.title ?? "Titlu"}</h2>

            <div className="text-green-600 font-bold text-xl">
              {formatPrice(data?.price ?? 0)}&euro;
            </div>
            <p
              className={`text-green-800 text-md ${
                ((data && data.listingType !== "FOR_SALE") ||
                  (data && data.sold)) &&
                "text-transparent"
              }`}
            >
              <span>{formatPrice((data?.price ?? 0) * TVA, 0)}&euro;</span>{" "}
              <span>TVA</span>
            </p>
          </div>

          <div className="tracking-tighter pt-4">
            <p className="mb-2">DESCRIERE</p>
            {data &&
              data.description &&
              data.description.split("\n").map((line, index) => (
                <p key={index} className="text-gray-800">
                  {line}
                </p>
              ))}
          </div>
        </div>
      </Paper>

      {isAdmin && (
        <div className="flex flex-wrap mt-4">
          {data?.deletedAt === null && (
            <DeleteButton id={params.id} className="mb-4 md:mb-0 md:mr-4">
              Șterge
            </DeleteButton>
          )}
          {!(data?.sold === true || data?.listingType !== "FOR_SALE") && (
            <MarkSoldButton id={params.id}>Marchează ca vândut</MarkSoldButton>
          )}
        </div>
      )}
    </div>
  );
}
