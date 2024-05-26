"use client";

import ImageGenerator from "./ImageGenerator";
import NoImage from "./NoImage";
import { Button } from "../ui/Button";
import { renderPNG } from "@/app/utils/render-png";

export const ImageForm = ({ image, settings }) => {
  return (
    <form className="w-full" style={{ display: image ? "block" : "none" }}>
      {image ? <ImageGenerator {...image} settings={settings} /> : <NoImage />}
      <div className="gap-2 flex justify-center mt-3">
        <Button
          disabled={!image}
          onClick={async () => {
            const { blob } = await renderPNG({
              image,
              settings,
            });
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = `${image.name}`;
              link.click();
            }
          }}
        >
          Download
        </Button>
        <Button
          variant="secondary"
          disabled={!image}
          onClick={async () => {
            const { blob } = await renderPNG({
              image,
              settings,
            });
            if (blob) {
              await navigator.clipboard.write([
                new ClipboardItem({
                  [blob.type]: blob,
                }),
              ]);
            }
          }}
        >
          Copy
        </Button>
      </div>
    </form>
  );
};

export default ImageForm;
