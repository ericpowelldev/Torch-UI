import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Layout/Box",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content inside of the box.",
      control: {
        type: "text",
      },
    },
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
    color: {
      description: "The color of the button.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "The color tint of the button.",
      control: {
        type: "select",
      },
    },
    width: {
      description: "The width of the box.",
      control: {
        type: "number",
      },
    },
    height: {
      description: "The height of the box.",
      control: {
        type: "number",
      },
    },
    radius: {
      description: "The border radius of the box.",
      control: {
        type: "number",
      },
    },
    shadow: {
      description: "Should the box have a shadow?",
      control: {
        type: "boolean",
      },
    },
    backdropBlur: {
      description: "Should the background behind the box have a blur?",
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
    color: "utility",
    tint: 500,
    width: 256,
    height: 256,
    radius: 16,
  },
};
