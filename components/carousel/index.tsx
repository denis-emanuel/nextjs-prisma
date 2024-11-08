"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from "./style.module.css";
import { cn } from "utils/tw";

type ImageCarouselProps = {
  className?: string;
  imageUrls: string[];
};

export function ImagesCarousel({ imageUrls, className }: ImageCarouselProps) {
  return (
    <div className={cn("w-full", className)}>
      <Carousel dynamicHeight>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`imagine${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImagesCarousel;
