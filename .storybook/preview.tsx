import React from "react";
import type { Preview } from "@storybook/react";

import { TUIProvider } from "../src";

// Theme overrides
const theme = {
  color: {
    // primary: "#00ff80",
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <TUIProvider theme={theme}>
        <Story />
      </TUIProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
