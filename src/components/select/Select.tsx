import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  SelectHTMLAttributes,
  useState,
  useRef,
} from "react";
import "./select.css";
import { cn, useMergeRefs } from "../../helpers/class-names";
import {
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
  offset,
} from "@floating-ui/react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  selectPrefix?: React.ReactNode;
  selectPostfix?: React.ReactNode;
  selectSize?: "s" | "m" | "l";
  className?: string;
  options?: { value: string; label: string }[];
}

const Select = (
  props: PropsWithChildren<SelectProps>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const {
    label,
    value,
    helperText,
    error = false,
    selectPrefix,
    selectPostfix,
    className,
    defaultValue,
    selectSize = "m",
    onChange,
    options,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(
    (defaultValue as string) ?? ""
  );

  const isControlled = value !== undefined;
  const selectedOption = options?.find(
    (option) => option.value === (isControlled ? value : internalValue)
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4)],
    placement: "bottom-start",
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const handleSelect = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }

    const event = {
      target: { value: optionValue },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange?.(event);
    setIsOpen(false);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs([ref, refs.setReference, containerRef]);

  return (
    <div className="select-wrapper">
      {label && <label className="select-label">{label}</label>}

      <div
        className={cn(
          "select-container",
          `select-${selectSize}`,
          error && "select-error",
          className
        )}
        ref={mergedRef}
        {...getReferenceProps()}
      >
        {!!selectPrefix && (
          <span className="select-prefix">{selectPrefix}</span>
        )}

        <div className="select-element">
          {selectedOption ? selectedOption.label : "Select..."}
        </div>

        {!!selectPostfix && (
          <span className="select-postfix">{selectPostfix}</span>
        )}
      </div>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="select-dropdown"
        >
          {options?.map((option) => (
            <div
              key={option.value}
              className="select-option"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {helperText && (
        <p className={cn("select-helper", error && "select-helper-error")}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default forwardRef(Select);
