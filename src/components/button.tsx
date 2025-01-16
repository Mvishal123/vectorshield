import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

type ButtonProps = VariantProps<typeof buttonClass> &
  HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
  };

const buttonClass = cva("rounded-3xl flex items-center", {
  variants: {
    variant: {
      primary: "bg-white text-black",
      outlined: "bg-transparent border border-white text-white",
    },
    size: {
      small: "text-xs",
      big: "text-sm px-6 py-3 font-medium",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "big",
  },
});

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="mr-2">{children}</span>
);

const Button = ({ children, variant, size }: ButtonProps) => {
  return <button className={buttonClass({ variant, size })}>{children}</button>;
};

export default Button;
