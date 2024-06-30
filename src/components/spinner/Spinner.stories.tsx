import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner.js";

const meta: Meta<typeof Spinner> = {
  title: "components/spinner",
  component: Spinner,
};

export default meta;
type Story = StoryObj<unknown>;

export const Spinners: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Spinner size="s" />S
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Spinner size="m" />M
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Spinner size="l" />L
      </div>
    </div>
  ),
};
