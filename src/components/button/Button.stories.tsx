import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.js";
import "./button.stories.css";

const meta: Meta<typeof Button> = {
  title: "components/button",
  component: Button,
};

export default meta;
type Story = StoryObj<unknown>;

function RenderedButtons() {
  return (
    <div className="buttons-wrapper">
      <Button variant="primary">primary button</Button>
      <Button variant="secondary">secondary button</Button>
      <Button variant="accent">accent button</Button>
      <Button variant="outline">outline button</Button>
    </div>
  );
}

export const Buttons: Story = {
  render: () => <RenderedButtons />,
};

export const Links: Story = {
  render: () => (
    <div className='buttons-wrapper'>
      <Button
        as="a"
        variant="primary"
        href="https://google.com"
        target="_blank"
      >
        primary button link
      </Button>
    </div>
  ),
};
