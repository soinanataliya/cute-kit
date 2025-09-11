import {
  useState,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  ForwardedRef,
} from "react";
import "./radiobutton.css";
import { cn } from "../../helpers/class-names";

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const RadioButton = (
  props: PropsWithChildren<RadioButtonProps>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const { label, className, checked, onChange, defaultChecked, ...rest } = props;

  const [internalChecked, setInternalChecked] = useState<boolean>(
    defaultChecked ?? false
  );

  const isControlled = checked !== undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };

  return (
    <label className={cn("radio-button-wrapper", className)}>
      <input
        type="radio"
        className="radio-button-input"
        ref={ref}
        checked={isControlled ? checked : internalChecked}
        onChange={handleChange}
        {...rest}
      />
      <span className="radio-button-checkmark"></span>
      {label && <span className="radio-button-label">{label}</span>}
    </label>
  );
};

export default forwardRef(RadioButton);