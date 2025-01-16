import clsx from "clsx";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <div className={clsx("max-w-[112rem] mx-auto px-12", props.className)}>{children}</div>
  );
};

export default Section;
