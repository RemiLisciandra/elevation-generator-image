import { RangeInput } from "./components/input/RangeInput";
import { FileInput } from "./components/input/FileInput";
import { Mainlayout } from "./layouts/MainLayout";
import { ImageForm } from "./components/image/ImageForm";
import { Settings } from "./components/Settings";
import { DisplayingImage } from "./components/image/DisplayingImage";
import { NoImage } from "./components/image/NoImage";

export default function Home() {
  return (
    <Mainlayout>
      <Settings>
        <FileInput title="File" />
        <RangeInput max={99} title="Padding" />
        <RangeInput max={99} title="Shadow" />
        <RangeInput max={99} title="Radius" />
      </Settings>
      <DisplayingImage>
        <NoImage />
        <ImageForm />
      </DisplayingImage>
    </Mainlayout>
  );
}
