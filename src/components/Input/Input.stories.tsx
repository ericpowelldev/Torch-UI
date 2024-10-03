import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Inputs/Input",
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
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "select",
      },
    },
    tooltip: {
      description: "Content inside of the tooltip (If present, tooltip will pop up on hover).",
      control: {
        type: "text",
      },
    },

    // Specialized Properties //

    backdropBlur: {
      description: "Should the input have a backdrop blur?",
      control: {
        type: "boolean",
      },
    },
    color: {
      description: "Color of the input (when focused).",
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Should the input be in a disabled state?",
      control: {
        type: "boolean",
      },
    },
    error: {
      description: "Should the input be in an error state?",
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
    icon: {
      table: {
        disable: true,
      },
    },
    info: {
      description: "Should the input be in an info state?",
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "Label content for the input.",
      control: {
        type: "text",
      },
    },
    loading: {
      description: "Should the input be in a loading state?",
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
    placeholder: {
      description: "Placeholder content for the input.",
      control: {
        type: "text",
      },
    },
    required: {
      description: "Should the input be required?",
      control: {
        type: "boolean",
      },
    },
    sublabel: {
      description: "Sublabel content for the input.",
      control: {
        type: "text",
      },
    },
    success: {
      description: "Should the input be in a success state?",
      control: {
        type: "boolean",
      },
    },
    tint: {
      description: "Color tint of the input (when focused).",
      control: {
        type: "select",
      },
    },
    variant: {
      description: "Variation of the input.",
      control: {
        type: "radio",
      },
    },
    warning: {
      description: "Should the input be in a warning state?",
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

export const SolidVariant: Story = {
  args: {
    label: "Solid Input",
    placeholder: "Enter some text...",
    variant: "solid",
  },
};

export const SoftVariant: Story = {
  args: {
    label: "Soft Input",
    placeholder: "Enter some text...",
    variant: "soft",
  },
};

export const PlainVariant: Story = {
  args: {
    label: "Plain Input",
    placeholder: "Enter some text...",
    variant: "plain",
  },
};
