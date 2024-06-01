import type { Meta, StoryObj } from "@storybook/react";
import Palette from "./Palette.js";

const meta: Meta<typeof Palette> = {
  title: "components/palette",
  component: Palette,
};

export default meta;
type Story = StoryObj<unknown>;

export const LightPalette: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Palette color="primary" />
        <p>primary color</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Palette color="secondary" />
        <p>secondary color</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Palette color="accent" />
        <p>accent color</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Palette color="extra1" />
        <p>extra color</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Palette color="extra2" />
        <p>extra color 2</p>
      </div>
    </div>
  ),
};
