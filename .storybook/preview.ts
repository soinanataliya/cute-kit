import type { Preview } from "@storybook/react";
import '../src/styles/index.css'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: { disable: true },
    layout: "centered",
  },
};

export default preview;
