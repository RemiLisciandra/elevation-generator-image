"use client";

import { Button } from "../ui/Button";
import { renderPNG } from "../../utils/render-png";
import { ImageGenerator } from "./ImageGenerator";

export const ImageForm = ({
  image,
  fileName,
  padding,
  shadow,
  radius,
  setPadding,
  setShadow,
  setRadius,
}) => {
  return (
    <form>
      {image && (
        <div className="border border-gray-200 rounded">
          <ImageGenerator
            src={image}
            padding={padding}
            shadow={shadow}
            radius={radius}
            setPadding={setPadding}
            setShadow={setShadow}
            setRadius={setRadius}
          />
        </div>
      )}
      <div className="gap-2 flex justify-center mt-3">
        <Button
          type="submit"
          disabled={!image}
          onClick={async () => {
            const { blob } = await renderPNG({
              image,
              settings: { padding, shadow, radius },
            });
            const url = URL.createObjectURL(blob);
            if (url && fileName) {
              const link = document.createElement("a");
              link.href = url;
              link.download = fileName;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              window.URL.revokeObjectURL(url);
            }
          }}
        >
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
