import React from "react";
import type { Preview } from "@storybook/react";

import { TUIProvider } from "../src";

// Theme overrides
const theme = {
  color: {
    primary: `#f46000`,
    secondary: `#4080c8`,
    tertiary: `#40b4a0`,
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <TUIProvider theme={theme} themeMode="light">
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
