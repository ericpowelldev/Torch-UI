import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";

const meta: Meta<typeof Component> = {
  title: "Layout/Container",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  component: Component,
  argTypes: {
    classes: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    props: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    component: {
      control: {
        type: "select",
      },
    },
    maxWidth: {
      control: {
        type: "radio",
      },
    },
    disablePadding: {
      control: {
        type: "boolean",
      },
    },
    visualize: {
      control: {
        type: "boolean",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: <div style={{ width: "100%", height: "256px" }} />,
    visualize: true,
  },
};
