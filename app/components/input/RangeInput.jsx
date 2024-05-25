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
  min = 0,
  max = 100,
  name,
  title,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="form-control w-full max-w-xs">
        <span className="label-text">{title}</span>
      </label>
      <Input
        className={rangeInputVariant({ variant, size })}
        type="range"
        min={min}
        max={max}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
