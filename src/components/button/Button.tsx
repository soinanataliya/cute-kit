import { ElementType, PropsWithChildren } from "react";
import "./button.css";
import { cn } from "../../helpers/class-names";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
}

const Button = ({
  children,
  variant = "primary",
}: PropsWithChildren<ButtonProps>) => {
  const Btn = "button" as ElementType;

  // css modules
  // a || button
  // className
  // ref
  // ButtonHTMLAttributes
  // принимает любые чилдрены

  return <Btn className={cn(`button ${variant}`)}>{children}</Btn>;
};

export default Button;
