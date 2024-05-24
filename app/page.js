"use client";

import { MainLayout } from "./layouts/MainLayout";
import { Settings } from "./components/Settings";
import { ImageContainer } from "./components/image/ImageContainer";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("file");
  const [padding, setPadding] = useState("0px");
  const [shadow, setShadow] = useState("0");
  const [radius, setRadius] = useState("0px");

  const handleImageChange = (imageData) => {
    setImage(imageData);
  };

  return (
    <MainLayout>
      <Settings
        onImageChange={handleImageChange}
        padding={padding}
        radius={radius}
        shadow={shadow}
        setPadding={setPadding}
        setRadius={setRadius}
        setShadow={setShadow}
        fileName={fileName}
        setFileName={setFileName}
      />
      <ImageContainer
        image={image}
        fileName={fileName}
        padding={padding}
        radius={radius}
        shadow={shadow}
        setPadding={setPadding}
        setRadius={setRadius}
        setShadow={setShadow}
      />
    </MainLayout>
  );
}
