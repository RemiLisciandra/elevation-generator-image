"use client";

import { cva } from "class-variance-authority";
import { Input } from "../ui/Input";

const rangeInputVariant = cva("range", {
  variants: {
    variant: { primary: "range-primary" },
    size: { sm: "range-sm" },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export const RangeInput = ({
  variant = "primary",
  size = "sm",
  title,
  min = 0,
  max = 100,
  onChange,
  name,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <label className="form-control w-full max-w-xs">
        <span className="label-text">{title}</span>
        <Input
          type="range"
          min={min}
          max={max}
          className={rangeInputVariant(variant, size)}
          onChange={onChange}
          name={name}
          value={value}
        />
      </label>
    </div>
  );
};

export default Input;
