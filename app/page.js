import { MainLayout } from "./layouts/MainLayout";
import { Settings } from "./components/Settings";
import { ImageContainer } from "./components/image/ImageContainer";

export default function Home() {
  return (
    <MainLayout>
      <Settings />
      <ImageContainer />
    </MainLayout>
  );
}
