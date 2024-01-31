import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Buttons/Button",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content inside of the button.",
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
      description: "The variation of the button.",
      control: {
        type: "radio",
      },
    },
    color: {
      description: "The color of the button.",
      control: {
        type: "radio",
      },
    },
    tint: {
      description: "The color tint of the button.",
      control: {
        type: "select",
      },
    },
    size: {
      description: "The size of the button.",
      control: {
        type: "radio",
      },
    },
    fullWidth: {
      description: "Should the button be full width?",
      control: {
        type: "boolean",
      },
    },
    pill: {
      description: "Should the button be pill shaped?",
      control: {
        type: "boolean",
      },
    },
    buttonShadow: {
      description: "Should the button have a shadow?",
      control: {
        type: "boolean",
      },
    },
    textShadow: {
      description: "Should the button text have a shadow?",
      control: {
        type: "boolean",
      },
    },
    backdropBlur: {
      description: "Should the background behind the button have a blur?",
      control: {
        type: "boolean",
      },
    },
    uppercase: {
      description: "Should the button text be uppercase?",
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
    error: {
      description: "Should the button be in an error state?",
      control: {
        type: "boolean",
      },
    },
    warning: {
      description: "Should the button be in a warning state?",
      control: {
        type: "boolean",
      },
    },
    success: {
      description: "Should the button be in a success state?",
      control: {
        type: "boolean",
      },
    },
    loading: {
      description: "Should the button be in a loading state?",
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
  args: {
    children: "Default Button",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    color: "tertiary",
  },
};
