import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Display/StatusIcon",
  tags: ["autodocs"],
  component: Component,
  argTypes: {
    // General Properties //

    props: {
      description: "Nested properties of the child components.",
      table: {
        disable: true,
      },
    },
    classes: {
      description: "Nested CSS classes of the child components.",
      table: {
        disable: true,
      },
    },
    className: {
      description: "CSS class of the root component.",
      table: {
        disable: true,
      },
    },
    style: {
      description: "Inline styling of the root component.",
      table: {
        disable: true,
      },
    },
    tooltip: {
      description: "Content inside of the tooltip (If present, tooltip will pop up on hover).",
      control: {
        type: "text",
      },
    },

    // Specialized Properties //

    animate: {
      description: "Should the icon animate?",
      control: {
        type: "boolean",
      },
    },
    animateMs: {
      description: "Speed at which the icon animates (in milliseconds).",
      control: {
        type: "range",
        min: 100,
        max: 2500,
        step: 100,
      },
    },
    color: {
      description: "Color of the icon.",
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Should the icon be disabled?",
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "Size of the icon.",
      control: {
        type: "range",
        min: 12,
        max: 96,
        step: 1,
      },
    },
    tint: {
      description: "Color tint of the icon.",
      control: {
        type: "select",
      },
    },
    variant: {
      description: "Variation of the icon.",
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
