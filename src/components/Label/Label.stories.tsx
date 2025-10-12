import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Inputs/Label",
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

    // Specialized Properties //

    color: {
      description: "Color of the label.",
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Should the label be in a disabled state?",
      control: {
        type: "boolean",
      },
    },
    error: {
      description: "Should the label be in an error state?",
      control: {
        type: "boolean",
      },
    },
    info: {
      description: "Should the label be in an info state?",
      control: {
        type: "boolean",
      },
    },
    inverse: {
      description: "Should the label be in an inverse state?",
      control: {
        type: "boolean",
      },
    },
    required: {
      description: "Should the label show a required indicator?",
      control: {
        type: "boolean",
      },
    },
    success: {
      description: "Should the label be in a success state?",
      control: {
        type: "boolean",
      },
    },
    tint: {
      description: "Color tint of the label.",
      control: {
        type: "select",
      },
    },
    warning: {
      description: "Should the label be in a warning state?",
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
    label: "Default Label",
    children: "Default Label",
  },
};
