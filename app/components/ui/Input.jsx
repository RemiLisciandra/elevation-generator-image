"use client";

export const Input = ({ type, className = "", ...props }) => {
  return <input className={className} type={type} {...props} />;
};

export default Input;
