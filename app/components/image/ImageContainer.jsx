"use client";

import { NoImage } from "./NoImage";
import { ImageForm } from "./ImageForm";

export const ImageContainer = ({
  image,
  padding,
  shadow,
  radius,
  setPadding,
  setRadius,
  setShadow,
}) => {
  return (
    <section className="flex-1 flex justify-center flex-col items-center gap-5">
      {!image && <NoImage />}
      <ImageForm
        image={image}
        padding={padding}
        shadow={shadow}
        radius={radius}
        setPadding={setPadding}
        setShadow={setShadow}
        setRadius={setRadius}
      />
    </section>
  );
};

export default ImageContainer;
