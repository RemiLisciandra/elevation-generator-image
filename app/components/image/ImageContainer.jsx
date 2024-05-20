"use client";

import { NoImage } from "./NoImage";
import { ImageForm } from "./ImageForm";

export const ImageContainer = () => {
  return (
    <section className="flex-1 flex justify-center flex-col items-center gap-5">
      <NoImage />
      <ImageForm />
    </section>
  );
};

export default ImageContainer;
