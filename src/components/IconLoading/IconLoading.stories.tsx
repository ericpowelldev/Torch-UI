import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Icons/IconLoading",
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
    thickness: {
      description: "The thickness of the icon track.",
      control: {
        type: "number",
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
