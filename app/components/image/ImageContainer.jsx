"use client";

import ImageForm from "./ImageForm";

export const ImageContainer = ({ image, settings }) => {
  return (
    <section className="flex-1 flex justify-center flex-col items-center gap-5">
      <ImageForm image={image} settings={settings} />
    </section>
  );
};

export default ImageContainer;
