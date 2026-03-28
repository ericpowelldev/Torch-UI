import path from "path";

import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-links",
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {},
    },
  },

  staticDirs: ["../static"],
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  webpackFinal: async (config: any) => {
    const rootDir = process.cwd();
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(rootDir, "src"),
      "@components": path.resolve(rootDir, "src/components"),
      "@utils": path.resolve(rootDir, "src/utils"),
      "@tui": path.resolve(rootDir, "src/Tui.tsx"),
    };
    return config;
  }
};

export default config;
