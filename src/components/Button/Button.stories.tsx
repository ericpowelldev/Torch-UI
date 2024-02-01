import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Buttons/Button",
  decorators: [
    (Story) => (
      <div style={{ width: `100%` }}>
        <Story />
      </div>
    ),
  ],
  component: Component,
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
        type: "select",
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
    info: {
      description: "Should the button be in an info state?",
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

export const Error: Story = {
  args: {
    children: "Error Button",
    color: "error",
    error: true,
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    color: "warning",
    warning: true,
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    color: "success",
    success: true,
  },
};

export const Info: Story = {
  args: {
    children: "Info Button",
    color: "info",
    info: true,
  },
};

export const Tint100: Story = {
  args: {
    children: "Tint 100 Button",
    color: "primary",
    tint: 100,
  },
};

export const Tint250: Story = {
  args: {
    children: "Tint 250 Button",
    color: "primary",
    tint: 250,
  },
};

export const Tint500: Story = {
  args: {
    children: "Tint 500 Button",
    color: "primary",
    tint: 500,
  },
};

export const Tint750: Story = {
  args: {
    children: "Tint 750 Button",
    color: "primary",
    tint: 750,
  },
};

export const Tint900: Story = {
  args: {
    children: "Tint 900 Button",
    color: "primary",
    tint: 900,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    color: "utility",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    color: "utility",
    disabled: true,
  },
};

export const Transparent: Story = {
  args: {
    children: "Transparent Button",
    color: "primary",
    variant: "transparent",
  },
};

export const Simple: Story = {
  args: {
    children: "Simple Button",
    color: "primary",
    variant: "simple",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    color: "primary",
    variant: "outline",
  },
};
