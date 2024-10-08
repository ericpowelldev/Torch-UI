import React from "react";
import type { Preview } from "@storybook/react";

import { TUIProvider } from "../src";

// Theme overrides
const theme = {};

const preview: Preview = {
  decorators: [
    (Story) => (
      <TUIProvider
        theme={theme}
        // customThemeName="dark"
      >
        <div style={{ position: "relative", padding: "16px" }}>
          <Story />
        </div>
      </TUIProvider>
    ),
  ],
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
};

export default preview;
