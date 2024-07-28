import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner.js";
import "./spinner.stories.css";

const meta: Meta<typeof Spinner> = {
  title: "components/spinner",
  component: Spinner,
};

export default meta;
type Story = StoryObj<unknown>;

export const Spinners: Story = {
  render: () => (
    <div className="spinners-wrapper">
      <div className="spinners-item">
        <Spinner size="s" />S
      </div>
      <div className="spinners-item">
        <Spinner size="m" />M
      </div>
      <div className="spinners-item">
        <Spinner size="l" />L
      </div>
    </div>
  ),
};
