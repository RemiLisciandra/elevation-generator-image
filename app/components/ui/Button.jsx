"use client";

import { cva } from "class-variance-authority";

const buttonVariant = cva("btn", {
  variants: {
    variant: { primary: "btn-primary", secondary: "btn-neutral" },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Button = ({
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button
      className={buttonVariant({ variant })}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
