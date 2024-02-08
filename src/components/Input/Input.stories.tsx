import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Inputs/Input",
  tags: ["autodocs"],
  component: Component,
  argTypes: {
    // General Properties //

    props: {
      description: "Nested properties of the component.",
      table: {
        disable: true,
      },
    },
    classes: {
      description: "Nested CSS classes of the component.",
      table: {
        disable: true,
      },
    },
    className: {
      description: "CSS class of the component.",
      table: {
        disable: true,
      },
    },
    style: {
      description: "Inline styling of the component.",
      table: {
        disable: true,
      },
    },
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "radio",
      },
    },
    tooltip: {
      description: "Content inside of the tooltip (If present, tooltip will pop up on hover).",
      control: {
        type: "text",
      },
    },

    // Specialized Properties //

    label: {
      description: "Label content for the input.",
      control: {
        type: "text",
      },
    },
    sublabel: {
      description: "Sublabel content for the input.",
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "Placeholder content for the input.",
      control: {
        type: "text",
      },
    },
    variant: {
      description: "Variation of the input.",
      control: {
        type: "radio",
      },
    },
    color: {
      description: "Color of the input (when focused).",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "Color tint of the input (when focused).",
      control: {
        type: "select",
      },
    },
    required: {
      description: "Should the input be required?",
      control: {
        type: "boolean",
      },
    },
    multiline: {
      description: "Should the input be multiline?",
      control: {
        type: "boolean",
      },
    },
    fullWidth: {
      description: "Should the input be the full width of its container?",
      control: {
        type: "boolean",
      },
    },
    backdropBlur: {
      description: "Should the input have a backdrop blur?",
      control: {
        type: "boolean",
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    error: {
      description: "Should the input be in an error state?",
      control: {
        type: "boolean",
      },
    },
    warning: {
      description: "Should the input be in a warning state?",
      control: {
        type: "boolean",
      },
    },
    success: {
      description: "Should the input be in a success state?",
      control: {
        type: "boolean",
      },
    },
    info: {
      description: "Should the input be in an info state?",
      control: {
        type: "boolean",
      },
    },
    loading: {
      description: "Should the input be in a loading state?",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Should the input be in a disabled state?",
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
    label: "Default Input",
    placeholder: "Enter some text...",
  },
};

export const Number: Story = {
  args: {
    label: "Number Input",
    placeholder: "Enter some numbers...",
    type: "number",
  },
};

export const Transparent: Story = {
  args: {
    label: "Transparent Input",
    placeholder: "Enter some text...",
    variant: "transparent",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline Input",
    placeholder: "Enter some text...",
    variant: "outline",
  },
};
