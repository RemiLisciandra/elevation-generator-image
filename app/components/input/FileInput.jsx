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

export const FileInput = ({ variant = "primary", title }) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="form-control w-full max-w-xs">
          <span className="label-text">{title}</span>
        </label>
        <Input className={fileInputVariant({ variant })} type="file" />
      </div>
    </>
  );
};

export default FileInput;
