import React from "react";
import type { Preview } from "@storybook/react-webpack5";

import { TuiThemeProvider, Box } from "../src";

// Theme overrides
const theme = {};
const mode = "light";

const preview: Preview = {
  decorators: [
    (Story) => (
      <TuiThemeProvider theme={theme} customThemeName={mode}>
        <Box
          color={(mode as "dark" | "light") === "dark" ? "bg4" : "bg1"}
          style={{ position: "relative", padding: "16px" }}
        >
          <Story />
        </Box>
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
