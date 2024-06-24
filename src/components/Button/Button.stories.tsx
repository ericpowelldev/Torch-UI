import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import { MdRocketLaunch } from "react-icons/md";
import Flex from "../Flex";

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
  render: () => (
    <Flex container gap={2}>
      <Component color="primary" tint="100">
        Primary
      </Component>
      <Component color="secondary" tint="100">
        Secondary
      </Component>
      <Component color="utility" tint="100">
        Utility
      </Component>
      <Component color="error" tint="100">
        Error
      </Component>
      <Component color="warning" tint="100">
        Warning
      </Component>
      <Component color="success" tint="100">
        Success
      </Component>
      <Component color="info" tint="100">
        Info
      </Component>
    </Flex>
  ),
};

export const Tint300: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary" tint="300">
        Primary
      </Component>
      <Component color="secondary" tint="300">
        Secondary
      </Component>
      <Component color="utility" tint="300">
        Utility
      </Component>
      <Component color="error" tint="300">
        Error
      </Component>
      <Component color="warning" tint="300">
        Warning
      </Component>
      <Component color="success" tint="300">
        Success
      </Component>
      <Component color="info" tint="300">
        Info
      </Component>
    </Flex>
  ),
};

export const Tint500: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary">Primary</Component>
      <Component color="secondary">Secondary</Component>
      <Component color="utility">Utility</Component>
      <Component color="error">Error</Component>
      <Component color="warning">Warning</Component>
      <Component color="success">Success</Component>
      <Component color="info">Info</Component>
    </Flex>
  ),
};

export const Tint700: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary" tint="700">
        Primary
      </Component>
      <Component color="secondary" tint="700">
        Secondary
      </Component>
      <Component color="utility" tint="700">
        Utility
      </Component>
      <Component color="error" tint="700">
        Error
      </Component>
      <Component color="warning" tint="700">
        Warning
      </Component>
      <Component color="success" tint="700">
        Success
      </Component>
      <Component color="info" tint="700">
        Info
      </Component>
    </Flex>
  ),
};

export const Tint900: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary" tint="900">
        Primary
      </Component>
      <Component color="secondary" tint="900">
        Secondary
      </Component>
      <Component color="utility" tint="900">
        Utility
      </Component>
      <Component color="error" tint="900">
        Error
      </Component>
      <Component color="warning" tint="900">
        Warning
      </Component>
      <Component color="success" tint="900">
        Success
      </Component>
      <Component color="info" tint="900">
        Info
      </Component>
    </Flex>
  ),
};

export const SoftVariant: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component variant="soft" color="primary">
        Primary
      </Component>
      <Component variant="soft" color="secondary">
        Secondary
      </Component>
      <Component variant="soft" color="utility">
        Utility
      </Component>
      <Component variant="soft" color="error">
        Error
      </Component>
      <Component variant="soft" color="warning">
        Warning
      </Component>
      <Component variant="soft" color="success">
        Success
      </Component>
      <Component variant="soft" color="info">
        Info
      </Component>
    </Flex>
  ),
};

export const PlainVariant: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component variant="plain" color="primary">
        Primary
      </Component>
      <Component variant="plain" color="secondary">
        Secondary
      </Component>
      <Component variant="plain" color="utility">
        Utility
      </Component>
      <Component variant="plain" color="error">
        Error
      </Component>
      <Component variant="plain" color="warning">
        Warning
      </Component>
      <Component variant="plain" color="success">
        Success
      </Component>
      <Component variant="plain" color="info">
        Info
      </Component>
    </Flex>
  ),
};

export const OutlinedVariant: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component variant="outlined" color="primary">
        Primary
      </Component>
      <Component variant="outlined" color="secondary">
        Secondary
      </Component>
      <Component variant="outlined" color="utility">
        Utility
      </Component>
      <Component variant="outlined" color="error">
        Error
      </Component>
      <Component variant="outlined" color="warning">
        Warning
      </Component>
      <Component variant="outlined" color="success">
        Success
      </Component>
      <Component variant="outlined" color="info">
        Info
      </Component>
    </Flex>
  ),
};
