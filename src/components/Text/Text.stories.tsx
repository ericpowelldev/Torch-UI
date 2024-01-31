import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Typography/Text",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The text content.",
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
    component: {
      description: "The HTML element to render the text in.",
      control: {
        type: "radio",
      },
    },
    variant: {
      description: "The variation of the text.",
      control: {
        type: "radio",
      },
    },
    color: {
      description: "The color of the text.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "The color tint of the text (does not apply to foreground or background colors).",
      control: {
        type: "select",
      },
    },
    align: {
      description: "The self-alignment of the text.",
      control: {
        type: "radio",
      },
    },
    href: {
      description: "The URL to link to (will override element to anchor).",
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: "Typography",
  },
};
