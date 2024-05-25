"use client";

import ImageGenerator from "./ImageGenerator";
import NoImage from "./NoImage";
import { Button } from "../ui/Button";

export const ImageForm = ({ image, settings }) => {
  return (
    <form className="w-full">
      {image ? <ImageGenerator {...image} settings={settings} /> : <NoImage />}
      <div className="gap-2 flex justify-center mt-3">
        <Button disabled={!image} onClick={() => null}>
          Download
        </Button>
        <Button variant="secondary" disabled={!image} onClick={() => null}>
          Copy
        </Button>
      </div>
    </form>
  );
};

export default ImageForm;
