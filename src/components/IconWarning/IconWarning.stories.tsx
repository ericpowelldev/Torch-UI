import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Icons/IconWarning",
  component: Component,
  parameters: {
    layout: "centered",
  },
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
      description: "The variation of the icon.",
      control: {
        type: "radio",
      },
    },
    color: {
      description: "The color of the icon.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "The color tint of the icon.",
      control: {
        type: "select",
      },
    },
    size: {
      description: "The size of the icon.",
      control: {
        type: "number",
      },
    },
    animate: {
      description: "Should the icon animate?",
      control: {
        type: "boolean",
      },
    },
    animationSpeed: {
      description: "The speed at which the icon animates (in milliseconds).",
      defaultValue: 400,
      control: {
        type: "number",
      },
    },
    disabled: {
      description: "Should the icon be disabled?",
      control: {
        type: "boolean",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
