import React from "react";

type InputProps = React.HTMLProps<HTMLInputElement>;

const Input = (props: InputProps) => {
  return <input {...props} className="bg-background border border-[#262626] rounded-[1.6rem] px-12 py-9 focus-visible:outline-[#282727]"/>;
};

export default Input;
