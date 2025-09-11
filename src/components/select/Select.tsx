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

const KEY = {
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ENTER: "Enter",
  SPACE: " ",
  ESCAPE: "Escape",
  HOME: "Home",
  END: "End",
};

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
    options = [],
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(
    (defaultValue as string) ?? ""
  );
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const shouldOpenDropdown =
      !isOpen &&
      [KEY.ARROW_DOWN, KEY.ARROW_UP, KEY.ENTER, KEY.SPACE].includes(event.key);

    if (shouldOpenDropdown) {
      event.preventDefault();
      setIsOpen(true);
      setHighlightedIndex(
        options.findIndex(
          (option) => option.value === (isControlled ? value : internalValue)
        ) || 0
      );
      return;
    }

    switch (event.key) {
      case KEY.ARROW_DOWN:
        event.preventDefault();
        {
          const isNotLastOption = highlightedIndex < options.length - 1;
          const nextIndex = isNotLastOption ? highlightedIndex + 1 : 0;
          setHighlightedIndex(nextIndex);
        }
        break;
      case KEY.ARROW_UP:
        event.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;
      case KEY.ENTER:
      case KEY.SPACE:
        event.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelect(options[highlightedIndex].value);
        }
        break;
      case KEY.ESCAPE:
        setIsOpen(false);
        break;
      case KEY.HOME:
        event.preventDefault();
        setHighlightedIndex(0);
        break;
      case KEY.END:
        event.preventDefault();
        setHighlightedIndex(options.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="select-wrapper" onKeyDown={handleKeyDown}>
      {label && <label className="select-label">{label}</label>}

      <div
        className={cn(
          "select-container",
          `select-${selectSize}`,
          error && "select-error",
          className
        )}
        tabIndex={0}
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
          {options.map((option, index) => (
            <div
              key={option.value}
              className={cn(
                "select-option",
                selectedOption?.value === option.value && "selected",
                index === highlightedIndex && "highlighted"
              )}
              onClick={() => handleSelect(option.value)}
              onMouseEnter={() => setHighlightedIndex(index)}
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
