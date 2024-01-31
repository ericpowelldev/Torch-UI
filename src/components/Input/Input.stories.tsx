import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Form/Input",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content inside of the input.",
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
    variant: {
      description: "The variation of the input.",
      control: {
        type: "radio",
      },
    },
    color: {
      description: "The color of the input (when active).",
      control: {
        type: "radio",
      },
      table: {
        disable: true,
      },
    },
    tint: {
      description: "The color tint of the input (when active).",
      control: {
        type: "select",
      },
      table: {
        disable: true,
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
      description: "Should the input be full width?",
      control: {
        type: "boolean",
      },
    },
    backdropBlur: {
      description: "Should the background behind the input have a blur?",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Should the input be disabled?",
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
    loading: {
      description: "Should the input be in a loading state?",
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "The label for the input.",
      control: {
        type: "text",
      },
    },
    sublabel: {
      description: "The sublabel for the input.",
      control: {
        type: "text",
      },
    },
    tooltip: {
      description: "The content inside of the tooltip.",
      control: {
        type: "text",
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
