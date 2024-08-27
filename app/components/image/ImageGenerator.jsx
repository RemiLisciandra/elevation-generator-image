"use client";

import Image from "next/image";

export const ImageGenerator = ({ image, settings }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: `${settings.padding}px`,
      }}
    >
      <Image
        alt={image.name}
        src={image.src}
        width={image.width}
        height={image.height}
        name={image.name}
        style={{
          boxShadow: `0 0 ${settings.shadow}px rgba(0,0,0,.${settings.shadow})`,
          borderRadius: `${settings.radius}px`,
          display: "flex",
        }}
      />
    </div>
  );
};

export default ImageGenerator;
