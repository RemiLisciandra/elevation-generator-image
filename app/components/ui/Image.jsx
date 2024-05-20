"use client";

import Image from "next/image";

export const ImageSelectedByUser = ({ src, alt = "Image" }) => {
  return <Image src={src} alt={alt} width={500} height={500} />;
};

export default ImageSelectedByUser;
