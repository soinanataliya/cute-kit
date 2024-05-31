import { ElementType } from "react";

export interface ButtonProps {}

const Button = () => {
  const Btn = "button" as ElementType;

  // css modules
  // a || button
  // className
  // ref
  // ButtonHTMLAttributes
  // принимает любые чилдрены

  return <Btn>Button</Btn>;
};

export default Button;
