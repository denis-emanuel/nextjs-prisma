/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Paper } from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-2 md:px-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl my-4 md:my-8 text-center px-2">
        Platforma de{" "}
        <span className="py-1 px-4 rounded-lg font-bold bg-gradient-to-r from-amber-200 to-yellow-500">
          vanzare utilaje
        </span>{" "}
        in Bistrita
        <LocationOnIcon className="inline text-yellow-500 text-xl md:text-2xl lg:text-3xl" />
      </h1>

      <div className="w-full flex flex-wrap justify-around">
        <Paper className="w-full md:w-2/5 flex flex-col items-center px-4 py-4 space-y-4 mb-4">
          <h2 className="text-lg lg:text-xl text-center">
            Vinde și cumpără utilaje rapid și ușor!
          </h2>
          <p className="text-center">
            Te ajutăm să găsești utilajele de care ai nevoie sau să vinzi ceea
            ce nu mai folosești.
          </p>
          <p className="text-center">
            <Link
              className="text-white font-bold rounded-full bg-black px-4 py-3"
              href="/utilaje"
            >
              Descoperă <OpenInNewIcon className="inline" />
            </Link>{" "}
            ofertele de azi!
          </p>
        </Paper>

        <Paper className="w-full md:w-2/5 flex flex-col items-center px-4 py-4 space-y-6 mb-4">
          <h2 className="text-lg lg:text-xl text-center">
            Transformă echipamentul nefolosit în bani!
          </h2>
          <p className="text-center">
            Publică-ți anunțul pe platforma noastră și găsește cumpărători
            locali.
          </p>
          <p className="text-center">
            <Link
              className="text-white font-bold rounded-full bg-black px-4 py-3"
              href="/contact"
            >
              <ContactPageIcon className="inline" /> Contactează
            </Link>{" "}
            administratorul pentru detalii.
          </p>
        </Paper>
      </div>

      <div className="container mx-auto py-2 lg:px-10 lg:pt-10">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/presentation/5.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/presentation/2.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/presentation/4.jpg"
              />
            </div>
          </div>
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/presentation/1.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/presentation/3.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/presentation/6.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
