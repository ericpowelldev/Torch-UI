import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import { MdRocketLaunch } from "react-icons/md";

const meta: Meta<typeof Component> = {
  title: "Buttons/Button",
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
    children: {
      description: "Content inside of the component.",
      control: {
        type: "text",
      },
    },
    tooltip: {
      description: "Content inside of the tooltip (If present, tooltip will pop up on hover).",
      control: {
        type: "text",
      },
    },

    // Specialized Properties //

    variant: {
      description: "Variation of the button.",
      control: {
        type: "radio",
      },
    },
    color: {
      description: "Color of the button.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "Color tint of the button.",
      control: {
        type: "select",
      },
    },
    size: {
      description: "Size of the button.",
      control: {
        type: "radio",
      },
    },
    uppercase: {
      description: "Should the button text be uppercase?",
      control: {
        type: "boolean",
      },
    },
    fullWidth: {
      description: "Should the button be the full width of its container?",
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
    shadowButton: {
      description: "Should the button have a shadow?",
      control: {
        type: "boolean",
      },
    },
    shadowLabel: {
      description: "Should the button label have a shadow?",
      control: {
        type: "boolean",
      },
    },
    backdropBlur: {
      description: "Should the button have a backdrop blur?",
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
    disabled: {
      description: "Should the button be in a disabled state?",
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

export const WithIcon: Story = {
  args: {
    children: "Button with Icon",
    icon: <MdRocketLaunch />,
  },
};

export const WithEmoji: Story = {
  args: {
    children: "Button with Emoji",
    icon: "🚀",
  },
};

export const ErrorState: Story = {
  args: {
    children: "Error Button",
    color: "error",
    error: true,
  },
};

export const WarningState: Story = {
  args: {
    children: "Warning Button",
    color: "warning",
    warning: true,
  },
};

export const SuccessState: Story = {
  args: {
    children: "Success Button",
    color: "success",
    success: true,
  },
};

export const InfoState: Story = {
  args: {
    children: "Info Button",
    color: "info",
    info: true,
  },
};

export const LoadingState: Story = {
  args: {
    children: "Loading Button",
    loading: true,
  },
};

export const DisabledState: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
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

export const Transparent: Story = {
  args: {
    children: "Transparent Button",
    variant: "transparent",
    color: "primary",
  },
};

export const Simple: Story = {
  args: {
    children: "Simple Button",
    variant: "simple",
    color: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    color: "primary",
  },
};
