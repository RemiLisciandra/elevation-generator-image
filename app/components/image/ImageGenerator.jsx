"use client";

import Image from "next/image";

export const ImageGenerator = ({
  src,
  width,
  height,
  name = "image",
  settings,
}) => {
  return (
    <div className="border border-gray-200 rounded">
      <div
        style={{
          padding: `${settings.padding}px`,
        }}
      >
        <Image
          alt={name}
          src={src}
          height={height}
          width={width}
          name={name}
          style={{
            boxShadow: `0 0 ${settings.shadow}px rgba(0,0,0,0.5)`,
            borderRadius: `${settings.radius}px`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageGenerator;
