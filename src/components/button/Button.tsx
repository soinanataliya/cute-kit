import {
  ButtonHTMLAttributes,
  ElementType,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
} from "react";
import "./button.css";
import { cn } from "../../helpers/class-names";

export type ButtonElement = "button" | "a";

export interface ButtonProps<T>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: T;
  variant?: "primary" | "secondary" | "accent" | "outline";
  href?: string;
  size?: "s" | "m" | "l";
  target?: string;
  className?: string;
}

const Button = <T extends ButtonElement = "button">(
  props: PropsWithChildren<ButtonProps<T>>,
  ref: ForwardedRef<HTMLElementTagNameMap>
) => {
  const Btn = props?.as ?? ("button" as ElementType);

  const {
    children,
    variant = "primary",
    className,
    size = "m",
    ...rest
  } = props;

  return (
    <Btn
      ref={ref}
      className={cn(`button-element ${variant}`, `button-${size}`, className)}
      {...rest}
    >
      {children}
    </Btn>
  );
};

export default forwardRef(Button);
