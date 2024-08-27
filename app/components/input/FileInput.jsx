"use client";

import { cva } from "class-variance-authority";
import { Input } from "../ui/Input";

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

export const FileInput = ({ variant = "primary", onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="form-control w-full max-w-xs">
        <span className="label-text">File</span>
        <Input
          type="file"
          name="file"
          className={fileInputVariant(variant)}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default FileInput;
