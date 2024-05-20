"use client";

import { Button } from "../ui/Button";

export const ImageForm = () => {
  return (
    <form>
      <div className="gap-2 flex">
        <Button type="submit">Download</Button>
        <Button variant="secondary">Copy</Button>
      </div>
    </form>
  );
};

export default ImageForm;
