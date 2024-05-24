"use client";

import { cva } from "class-variance-authority";
import { Input } from "../ui/Input";
import { useCallback, useMemo } from "react";

const fileInputVariant = cva(
  "file-input file-input-sm file-input-bordered w-full max-w-xs",
  {
    variants: {
      variant: { primary: "file-input-primary" },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export const FileInput = ({ variant = "primary", title, onFileSelect }) => {
  const MAX_FILE_SIZE = 5000000;
  const ACCEPTED_IMAGE_TYPES = useMemo(
    () => ["image/jpeg", "image/jpg", "image/png", "image/webp"],
    []
  );

  const handleFileChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        const isValidSize = file.size <= MAX_FILE_SIZE;
        const isValidType = ACCEPTED_IMAGE_TYPES.includes(file.type);

        if (isValidSize && isValidType) {
          const reader = new FileReader();
          reader.onloadend = () => {
            onFileSelect(reader.result, file.name);
          };
          reader.readAsDataURL(file);
        } else {
          event.target.value = "";
          onFileSelect(null, "file");
        }
      }
    },
    [onFileSelect, ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE]
  );

  return (
    <div className="flex flex-col">
      <label className="form-control w-full max-w-xs">
        <span className="label-text">File</span>
      </label>
      <Input
        className={fileInputVariant({ variant })}
        type="file"
        name={title.toLowerCase()}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
