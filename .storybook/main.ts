import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc",
  ],

  docs: {
    autodocs: "tag",
  },

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
};

export default config;
