import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import { MdRocketLaunch } from "react-icons/md";

const meta: Meta<typeof Component> = {
  title: "Inputs/Button",
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

    backdropBlur: {
      description: "Should the button have a backdrop blur?",
      control: {
        type: "boolean",
      },
    },
    color: {
      description: "Color of the button.",
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Should the button be in a disabled state?",
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
    fullWidth: {
      description: "Should the button be the full width of its container?",
      control: {
        type: "boolean",
      },
    },
    icon: {
      description: "Icon to render at the start of the button.",
      table: {
        disable: true,
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
    pill: {
      description: "Should the button be pill shaped?",
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      description: "Should the button be in a placeholder state?",
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
    size: {
      description: "Size of the button.",
      control: {
        type: "radio",
      },
    },
    tint: {
      description: "Color tint of the button.",
      control: {
        type: "select",
      },
    },
    uppercase: {
      description: "Should the button text be uppercase?",
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
    variant: {
      description: "Variation of the button.",
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary",
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
    children: "Error State",
    color: "error",
    error: true,
  },
};

export const WarningState: Story = {
  args: {
    children: "Warning State",
    color: "warning",
    warning: true,
  },
};

export const SuccessState: Story = {
  args: {
    children: "Success State",
    color: "success",
    success: true,
  },
};

export const InfoState: Story = {
  args: {
    children: "Info State",
    color: "info",
    info: true,
  },
};

export const LoadingState: Story = {
  args: {
    children: "Loading State",
    loading: true,
  },
};

export const PlaceholderState: Story = {
  args: {
    children: "Placeholder State",
    placeholder: true,
  },
};

export const DisabledState: Story = {
  args: {
    children: "Disabled State",
    disabled: true,
  },
};

export const Tint100: Story = {
  args: {
    children: "Tint 100",
    color: "primary",
    tint: 100,
  },
};

export const Tint300: Story = {
  args: {
    children: "Tint 300",
    color: "primary",
    tint: 300,
  },
};

export const Tint500: Story = {
  args: {
    children: "Tint 500",
    color: "primary",
    tint: 500,
  },
};

export const Tint700: Story = {
  args: {
    children: "Tint 700",
    color: "primary",
    tint: 700,
  },
};

export const Tint900: Story = {
  args: {
    children: "Tint 900",
    color: "primary",
    tint: 900,
  },
};

export const SoftVariant: Story = {
  args: {
    children: "Soft Variant",
    variant: "soft",
    color: "primary",
  },
};

export const PlainVariant: Story = {
  args: {
    children: "Plain Variant",
    variant: "plain",
    color: "primary",
  },
};

export const OutlinedVariant: Story = {
  args: {
    children: "Outlined Variant",
    variant: "outlined",
    color: "primary",
  },
};
