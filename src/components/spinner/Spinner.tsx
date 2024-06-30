import { ForwardedRef, forwardRef } from "react";
import { cn } from "../../helpers/class-names";
import "./spinner.css";

export interface SpinnerProps {
  size: "s" | "m" | "l";
  className?: string;
}

const Spinner = (props: SpinnerProps, ref: ForwardedRef<SVGSVGElement>) => {
  const { size = "s", className, ...rest } = props;
  return (
    <svg
      ref={ref}
      viewBox="0 0 50 50"
      className={cn(`spinner spinner-rotate spinner-size--${size}`, className)}
      {...rest}
    >
      <path
        d="M25 5a20.14 20.14 0 0120 17.88 2.51 2.51 0 002.49 2.26A2.52 2.52 0 0050 22.33a25.14 25.14 0 00-50 0 2.52 2.52 0 002.5 2.81A2.51 2.51 0 005 22.88 20.14 20.14 0 0125 5z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default forwardRef(Spinner);
