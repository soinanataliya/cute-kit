import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.js";

const meta: Meta<typeof Button> = {
  title: "components/buttons/button",
  component: Button,
};

export default meta;
type Story = StoryObj<unknown>;

export const Buttons: Story = {
  render: () => (
    <div>
      <Button />
    </div>
  ),
};
