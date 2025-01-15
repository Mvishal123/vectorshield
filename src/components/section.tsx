import clsx from "clsx";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <div className={clsx("max-w-screen-xl mx-auto", props.className)}>{children}</div>
  );
};

export default Section;
