import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from "react";
import "./input.css";
import { cn } from "../../helpers/class-names";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  inputPrefix?: React.ReactNode;
  inputPostfix?: React.ReactNode;
  inputSize?: "s" | "m" | "l";
  className?: string;
}

const Input = (
  props: PropsWithChildren<InputProps>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const {
    label,
    value,
    helperText,
    error = false,
    inputPrefix,
    inputPostfix,
    className,
    defaultValue,
    inputSize = "m",
    onChange,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState<string>(
    (defaultValue as string) ?? ""
  );

  const isControlled = value !== undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}

      <div
        className={cn(
          "input-container",
          `input-${inputSize}`,
          error && "input-error",
          className
        )}
      >
        {!!inputPrefix && <span className="input-prefix">{inputPrefix}</span>}

        <input
          ref={ref}
          className="input-element"
          value={isControlled ? (value as string) : internalValue}
          onChange={handleChange}
          aria-invalid={error}
          {...rest}
        />

        {!!inputPostfix && (
          <span className="input-postfix">{inputPostfix}</span>
        )}
      </div>

      {helperText && (
        <p className={cn("input-helper", error && "input-helper-error")}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default forwardRef(Input);
