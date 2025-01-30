import React from "react";
import type { Preview } from "@storybook/react";

import { TuiThemeProvider } from "../src";

// Theme overrides
const theme = {};

const preview: Preview = {
  decorators: [
    (Story) => (
      <TuiThemeProvider
        theme={theme}
        // customThemeName="dark"
      >
        <div style={{ position: "relative", padding: "16px" }}>
          <Story />
        </div>
      </TuiThemeProvider>
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
