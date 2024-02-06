import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Inputs/Toggle",
  component: Component,
  tags: ["autodocs"],
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
    variant: {
      description: "The variant of the toggle.",
      control: {
        type: "radio",
      },
    },
    color: {
      description: "The color of the toggle.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "The color tint of the toggle.",
      control: {
        type: "select",
      },
    },
    size: {
      description: "The size of the toggle.",
      control: {
        type: "radio",
      },
    },
    shadow: {
      description: "Should the toggle have a shadow?",
      control: {
        type: "boolean",
      },
    },
    checked: {
      description: "Should the toggle be checked?",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Should the button be disabled?",
      control: {
        type: "boolean",
      },
    },
    tooltip: {
      description: "The content inside of the tooltip.",
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
