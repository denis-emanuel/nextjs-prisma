/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import { getLastPostByListingType } from "./actions/posts";
import formatPrice from "utils/format-price";
import styles from "./style.module.css";

export default async function Home() {
  const lastForRent = await getLastPostByListingType("FOR_RENT");
  const lastForSale = await getLastPostByListingType("FOR_SALE");

  return (
    <div className="flex flex-col items-center px-2 md:px-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl my-4 md:my-8 text-center px-2">
        Platforma de{" "}
        <span className="py-1 px-4 rounded-lg font-bold bg-gradient-to-r from-amber-200 to-yellow-500">
          vanzare/inchiriere utilaje
        </span>{" "}
        in Bistrita
        <LocationOnIcon className="inline text-yellow-500 text-xl md:text-2xl lg:text-3xl" />
      </h1>

      <div className="w-full flex flex-wrap justify-around items-center md:gap-y-10">
        {lastForSale !== null && (
          <div className="flex flex-col items-center w-full md:w-[30%]">
            <Link href={`/utilaje/${lastForSale.id}`}>
              <h2 className="text-lg lg:text-xl text-center">
                Ultimul anunt de{" "}
                <span className="text-listing-sale font-bold">vanzare</span>
              </h2>
              <div className="relative rounded-lg">
                <div className={`${styles.ribbon} bg-listing-sale`}>NOU!</div>
                <div className="flex flex-col items-center">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={lastForSale?.images[0]?.url ?? "/no-image.jpg"}
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {lastForSale?.title}
                  </h3>
                  <p className="text-listing-sale text-xl">
                    {formatPrice(lastForSale?.price ?? 0)}&euro;
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}

        <Paper className="w-full md:w-[50%] flex flex-col items-center p-4 md:p-8 space-y-4 bg-white bg-opacity-5">
          <h2 className="text-lg lg:text-xl text-center">
            Cumpara, inchiriaza sau vinde utilaje rapid și ușor!
          </h2>
          <p className="text-center text-sm md:text-base">
            Te ajutăm să găsești utilajele de care ai nevoie sau să vinzi ceea
            ce nu mai folosești.
          </p>
          <hr />
          <p className="text-center text-base leading-8">
            <Link
              className="text-white font-bold rounded-full bg-black px-2 md:px-4 py-2 md:py-3 hover:bg-gray-800"
              href="/utilaje"
            >
              Descoperă <OpenInNewIcon className="inline" />
            </Link>{" "}
            ofertele de azi!
          </p>
        </Paper>

        <Paper className="w-full md:w-[50%] flex flex-col items-center p-4 md:p-8 space-y-4 bg-white bg-opacity-5">
          <h2 className="text-lg lg:text-xl text-center">
            Transformă echipamentul nefolosit în bani!
          </h2>
          <p className="text-center text-sm md:text-base">
            Publică-ți anunțul pe platforma noastră și găsește cumpărători
            locali.
          </p>
          <hr />
          <p className="text-center text-base leading-8">
            <Link
              className="text-white font-bold rounded-full bg-black px-2 md:px-4 py-2 md:py-3 hover:bg-gray-800"
              href="/contact"
            >
              <ContactPageIcon className="inline" /> Contactează
            </Link>{" "}
            administratorul pentru detalii.
          </p>
        </Paper>

        {lastForRent !== null && (
          <div className="flex flex-col items-center w-full md:w-[30%]">
            <h2 className="text-lg lg:text-xl text-center">
              Ultimul anunt de{" "}
              <span className="text-listing-rent font-bold">inchiriere</span>
            </h2>
            <div className="relative">
              <div className={`${styles.ribbon} bg-listing-rent`}>NOU!</div>
              <div className="flex flex-col items-center">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={lastForRent?.images[0]?.url ?? "/no-image.jpg"}
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {lastForRent?.title}
                </h3>
                <p className="text-listing-rent text-xl">
                  {formatPrice(lastForRent?.price ?? 0)}&euro;
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
