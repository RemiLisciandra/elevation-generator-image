"use client";

import { MainLayout } from "./layouts/MainLayout";
import { Settings } from "./components/Settings";
import { ImageContainer } from "./components/image/ImageContainer";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState();
  const [settings, setSettings] = useState({
    padding: 0,
    shadow: 0,
    radius: 0,
  });

  return (
    <MainLayout>
      <Settings
        setImage={setImage}
        setSettings={setSettings}
        settings={settings}
      />
      <ImageContainer image={image} settings={settings} />
    </MainLayout>
  );
}
