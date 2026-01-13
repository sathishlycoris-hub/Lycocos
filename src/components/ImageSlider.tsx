import { useEffect, useRef, useState } from "react";

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const doubledImages = [...images, ...images];

  return (
    <div className="slider-container overflow-hidden">
      <div className="slider-track flex">
        {doubledImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-80 md:w-80 md:h-96 mx-2"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
