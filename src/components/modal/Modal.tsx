import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useFloating,
} from "@floating-ui/react";
import "./modal.css";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  labelId?: string;
}

const Modal = (
  props: PropsWithChildren<ModalProps>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { children, open, onOpenChange } = props;

  const floatingData = useFloating({ open, onOpenChange });

  return (
    <FloatingPortal>
      {floatingData.context.open && (
        <FloatingOverlay className="modal-overlay">
          <FloatingFocusManager context={floatingData.context} modal>
            <div ref={ref}>{children}</div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </FloatingPortal>
  );
};

export default forwardRef(Modal);
