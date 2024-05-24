"use client";

import Image from "next/image";

export const ImageGenerator = ({
  src,
  padding,
  shadow,
  radius,
  alt = "Image",
}) => {
  return (
    <div style={{ padding: padding }}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        style={{
          borderRadius: radius,
          boxShadow: `0px 0px ${shadow}px rgba(0,0,0,0.75)`,
        }}
      />
    </div>
  );
};

export default ImageGenerator;
