import type { Meta, StoryObj } from "@storybook/react";
import Palette from "./Palette.js";
import "./palette.stories.css";

const meta: Meta<typeof Palette> = {
  title: "components/palette",
  component: Palette,
};

export default meta;
type Story = StoryObj<unknown>;

export const LightPalette: Story = {
  render: () => (
    <div className="palette-wrapper">
      <div className="palette-item">
        <Palette color="primary" />
        <p>primary color</p>
      </div>
      <div className="palette-item">
        <Palette color="secondary" />
        <p>secondary color</p>
      </div>
      <div className="palette-item">
        <Palette color="accent" />
        <p>accent color</p>
      </div>
      <div className="palette-item">
        <Palette color="extra1" />
        <p>extra color</p>
      </div>
      <div className="palette-item">
        <Palette color="extra2" />
        <p>extra color 2</p>
      </div>
    </div>
  ),
};
