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
    <div className="border border-gray-200 rounded" style={{ display: "flex" }}>
      <div
        style={{
          padding: `${settings.padding}px`,
          display: "flex",
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
            display: "flex",
          }}
        />
      </div>
    </div>
  );
};

export default ImageGenerator;
