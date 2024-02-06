import React from "react";
import type { Preview } from "@storybook/react";

import { TUIProvider } from "../src";

// Theme overrides
const theme = {};

const preview: Preview = {
  decorators: [
    (Story) => (
      <TUIProvider theme={theme} themeStyle="dark" themeMode="system">
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
