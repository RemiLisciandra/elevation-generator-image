"use client";

import ImageGenerator from "./ImageGenerator";
import NoImage from "./NoImage";
import { Button } from "../ui/Button";
import { renderPNG } from "@/app/utils/render-png";

export const ImageForm = ({ image, settings }) => {
  return (
    <form className="w-full">
      {image ? (
        <ImageGenerator image={image} settings={settings} />
      ) : (
        <NoImage />
      )}
      <div className="gap-2 flex justify-center mt-3">
        <Button
          disabled={!image}
          onClick={async () => {
            const { blob } = await renderPNG({
              image,
              settings,
            });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = `${image.name}.png`;
            a.click();
          }}
        >
          Download
        </Button>
        <Button disabled={!image} onClick={() => null} variant="secondary">
          Copy
        </Button>
      </div>
    </form>
  );
};

export default ImageForm;
