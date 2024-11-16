/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "motion/react";
import { Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import vehicle1 from "public/doodles/vehicle_1.png";
import vehicle2 from "public/doodles/vehicle_2.png";
import vehicle3 from "public/doodles/vehicle_3.png";
import formatPrice from "utils/format-price";
import styles from "./style.module.css";

export const Title = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl my-4 md:my-8 text-center px-2">
        Platforma de{" "}
        <span className="font-bold text-listing-sale">vanzare</span> si{" "}
        <span className="font-bold text-listing-rent">inchiriere</span> utilaje
        in Bistrita
        <LocationOnIcon className="inline text-xl md:text-2xl lg:text-3xl" />
      </h1>
    </motion.div>
  );
};

export const Item = ({
  id,
  imageUrl,
  title,
  price,
  listingType,
  direction = "left",
}: {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  listingType: "FOR_SALE" | "FOR_RENT";
  direction: "left" | "right";
}) => {
  return (
    <div className="flex flex-col items-center w-full md:w-[30%]">
      <motion.div
        initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        whileHover={{
          scale: 1.05,
        }}
      >
        <Link href={`/utilaje/${id}`}>
          <h2 className="text-lg lg:text-xl text-center">
            Ultimul anunt de{" "}
            <span
              className={`text-listing-${
                listingType === "FOR_SALE" ? "sale" : "rent"
              } font-bold`}
            >
              {listingType === "FOR_SALE" ? "vanzare" : "inchiriere"}
            </span>
          </h2>
          <div className="relative rounded-lg">
            <motion.div
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div
                className={`${styles.ribbon} text-listing-${
                  listingType === "FOR_SALE" ? "sale" : "rent"
                }`}
              >
                NOU!
              </div>
            </motion.div>
            <div className="flex flex-col items-center">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={imageUrl ?? "/no-image.jpg"}
              />
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              <p className="text-listing-sale text-xl">
                {formatPrice(price)}&euro;
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export const Offers = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-[50%]"
      whileHover={{
        scale: 1.05,
      }}
    >
      <Paper className="flex flex-col items-center p-4 md:p-8 space-y-4 bg-white bg-opacity-5">
        <h2 className="text-lg lg:text-xl text-center">
          Cumpara, inchiriaza sau vinde utilaje rapid și ușor!
        </h2>
        <p className="text-center text-sm md:text-base">
          Te ajutăm să găsești utilajele de care ai nevoie sau să vinzi ceea ce
          nu mai folosești.
        </p>
        <br />
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
    </motion.div>
  );
};

export const Contact = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-[50%]"
    >
      <Paper className=" p-4 md:p-8 bg-white bg-opacity-5 border-opacity-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="text-lg lg:text-xl text-center">
            Transformă echipamentul nefolosit în bani!
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <p className="text-center text-sm md:text-base">
            Publică-ți anunțul pe platforma noastră și găsește cumpărători
            locali.
          </p>

          <p className="text-center text-base leading-8">
            <Link
              className="text-white font-bold rounded-full bg-black px-2 md:px-4 py-2 md:py-3 hover:bg-gray-800"
              href="/contact"
            >
              <ContactPageIcon className="inline" /> Contactează-ne
            </Link>{" "}
            pentru detalii.
          </p>
        </motion.div>
      </Paper>
    </motion.div>
  );
};

export function BackgroundVehicleAnimation() {
  return (
    <div className="hidden md:block">
      <div className="absolute top-[16.6vh] left-[50%] z-[-1] pointer-events-none h-20 w-full">
        <motion.div
          animate={{
            x: [-800, 800, 800, -800, -800],
            rotateY: [-180, -180, 0, 0, -180],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", zIndex: -1 }}
        >
          <Image
            src={vehicle1}
            alt="Construction Vehicle"
            width={80}
            height={80}
          />
        </motion.div>
      </div>
      <div className="absolute top-[50vh] left-[50%] z-[-1] pointer-events-none h-20 w-full">
        <motion.div
          animate={{
            x: [-800, 800, 800, -800, -800],
            rotateY: [-180, -180, 0, 0, -180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 6,
          }}
          style={{ position: "absolute", zIndex: -1 }}
        >
          <Image
            src={vehicle2}
            alt="Construction Vehicle"
            width={80}
            height={80}
          />
        </motion.div>
      </div>
      <div className="absolute top-[83.3vh] left-[50%] z-[-1] pointer-events-none h-20 w-full">
        <motion.div
          animate={{
            x: [800, -800, -800, 800, 800],
            rotateY: [0, 0, -180, -180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ position: "absolute", zIndex: -1 }}
        >
          <Image
            src={vehicle3}
            alt="Construction Vehicle"
            width={80}
            height={80}
          />
        </motion.div>
      </div>
    </div>
  );
}
