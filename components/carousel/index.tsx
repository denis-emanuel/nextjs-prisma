"use client";

import Image from "next/image";
import React, { useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type ImageCarouselProps = {
  imageUrls: string[];
};

export function ImagesCarousel({ imageUrls }: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (imageUrls.length === 0) return;
    setCurrentImage((next) => (next === imageUrls.length - 1 ? 0 : next + 1));
  };

  const prevImage = () => {
    if (imageUrls.length === 0) return;
    setCurrentImage((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  return (
    <>
      {imageUrls?.length > 0 ? (
        <div className="relative w-full h-full mb-6">
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={imageUrl}
                alt="imagini"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
          <div className="z-10 text-black-dark absolute -bottom-6 lg:-bottom-8 left-0 right-0 flex justify-center items-center mt-2 lg:text-2xl">
            <div>
              {currentImage + 1} / {imageUrls.length}
            </div>
          </div>
          <div className="absolute h-full top-0 left-0 right-0 flex justify-between">
            <button
              onClick={prevImage}
              className="md:rounded-r-lg h-full w-10 md:h-20 md:w-10 lg:h-16 md:hover:ring-2 absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-transparent to-gray-600 hover:from-transparent hover:to-gray-700"
            >
              <ArrowBackIosIcon className="text-black text-3xl md:text-5xl mx-auto" />
            </button>

            <button
              onClick={nextImage}
              className="md:rounded-l-lg h-full w-10 md:h-20 md:w-10 lg:h-16 md:hover:ring-2 absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent to-gray-600 hover:from-transparent hover:to-gray-700 "
            >
              <ArrowForwardIosIcon className="text-black text-3xl md:text-5xl" />
            </button>
          </div>
        </div>
      ) : (
        <>
          <Image
            src="/no-image.jpg"
            alt="imagini"
            fill
            style={{ objectFit: "contain" }}
          />
          <div className="z-10 text-black-dark absolute -bottom-6 lg:-bottom-8 left-0 right-0 flex justify-center items-center mt-2 lg:text-2xl">
            <div>nicio imagine</div>
          </div>
        </>
      )}
    </>
  );
}

export default ImagesCarousel;
