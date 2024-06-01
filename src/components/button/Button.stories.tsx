import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.js";

const meta: Meta<typeof Button> = {
  title: "components/button",
  component: Button,
};

export default meta;
type Story = StoryObj<unknown>;

export const Buttons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <Button variant="primary">primary button</Button>
      <Button variant="secondary">secondary button</Button>
      <Button variant="accent">accent button</Button>
    </div>
  ),
};
