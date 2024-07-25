import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal.js";
import Button from "../button/Button.js";
import { useCallback, useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "components/modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<unknown>;

export const Modals: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
      setOpen(true);
    }, [setOpen]);

    const handleClose = useCallback(() => {
      setOpen(false);
    }, [setOpen]);

    return (
      <div>
        <Button variant="primary" onClick={handleOpen}>
          Open modal
        </Button>
        <Modal open={open}>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal>
      </div>
    );
  },
};
