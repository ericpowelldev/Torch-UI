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

export const VariantsAndColors: Story = {
  render: () => (
    <Flex container direction="column" gap={3}>
      <Flex container gap={2}>
        <Component style={{ width: 180 }} variant="solid" color="primary">
          Primary Solid
        </Component>
        <Component style={{ width: 180 }} variant="soft" color="primary">
          Primary Soft
        </Component>
        <Component style={{ width: 180 }} variant="plain" color="primary">
          Primary Plain
        </Component>
        <Component style={{ width: 180 }} variant="outlined" color="primary">
          Primary Outlined
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 180 }} variant="solid" color="secondary">
          Secondary Solid
        </Component>
        <Component style={{ width: 180 }} variant="soft" color="secondary">
          Secondary Soft
        </Component>
        <Component style={{ width: 180 }} variant="plain" color="secondary">
          Secondary Plain
        </Component>
        <Component style={{ width: 180 }} variant="outlined" color="secondary">
          Secondary Outlined
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 180 }} variant="solid" color="utility">
          Utility Solid
        </Component>
        <Component style={{ width: 180 }} variant="soft" color="utility">
          Utility Soft
        </Component>
        <Component style={{ width: 180 }} variant="plain" color="utility">
          Utility Plain
        </Component>
        <Component style={{ width: 180 }} variant="outlined" color="utility">
          Utility Outlined
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 180 }} variant="solid" color="error">
          Error Solid
        </Component>
        <Component style={{ width: 180 }} variant="soft" color="error">
          Error Soft
        </Component>
        <Component style={{ width: 180 }} variant="plain" color="error">
          Error Plain
        </Component>
        <Component style={{ width: 180 }} variant="outlined" color="error">
          Error Outlined
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 180 }} variant="solid" color="warning">
          Warning Solid
        </Component>
        <Component style={{ width: 180 }} variant="soft" color="warning">
          Warning Soft
        </Component>
        <Component style={{ width: 180 }} variant="plain" color="warning">
          Warning Plain
        </Component>
        <Component style={{ width: 180 }} variant="outlined" color="warning">
          Warning Outlined
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 180 }} variant="solid" color="success">
          Success Solid
        </Component>
        <Component style={{ width: 180 }} variant="soft" color="success">
          Success Soft
        </Component>
        <Component style={{ width: 180 }} variant="plain" color="success">
          Success Plain
        </Component>
        <Component style={{ width: 180 }} variant="outlined" color="success">
          Success Outlined
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 180 }} variant="solid" color="info">
          Info Solid
        </Component>
        <Component style={{ width: 180 }} variant="soft" color="info">
          Info Soft
        </Component>
        <Component style={{ width: 180 }} variant="plain" color="info">
          Info Plain
        </Component>
        <Component style={{ width: 180 }} variant="outlined" color="info">
          Info Outlined
        </Component>
      </Flex>
    </Flex>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component variant="solid" icon={<MdRocketLaunch />}>
        Button with Icon
      </Component>
      <Component variant="soft" icon={<MdRocketLaunch />}>
        Button with Icon
      </Component>
      <Component variant="plain" icon={<MdRocketLaunch />}>
        Button with Icon
      </Component>
      <Component variant="outlined" icon={<MdRocketLaunch />}>
        Button with Icon
      </Component>
    </Flex>
  ),
};

export const WithEmoji: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component variant="solid" icon="🚀">
        Button with Emoji
      </Component>
      <Component variant="soft" icon="🚀">
        Button with Emoji
      </Component>
      <Component variant="plain" icon="🚀">
        Button with Emoji
      </Component>
      <Component variant="outlined" icon="🚀">
        Button with Emoji
      </Component>
    </Flex>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component error variant="solid" color="error">
        Error State
      </Component>
      <Component error variant="soft" color="error">
        Error State
      </Component>
      <Component error variant="plain" color="error">
        Error State
      </Component>
      <Component error variant="outlined" color="error">
        Error State
      </Component>
    </Flex>
  ),
};

export const WarningState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component warning variant="solid" color="warning">
        Warning State
      </Component>
      <Component warning variant="soft" color="warning">
        Warning State
      </Component>
      <Component warning variant="plain" color="warning">
        Warning State
      </Component>
      <Component warning variant="outlined" color="warning">
        Warning State
      </Component>
    </Flex>
  ),
};

export const SuccessState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component success variant="solid" color="success">
        Success State
      </Component>
      <Component success variant="soft" color="success">
        Success State
      </Component>
      <Component success variant="plain" color="success">
        Success State
      </Component>
      <Component success variant="outlined" color="success">
        Success State
      </Component>
    </Flex>
  ),
};

export const InfoState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component info variant="solid" color="info">
        Info State
      </Component>
      <Component info variant="soft" color="info">
        Info State
      </Component>
      <Component info variant="plain" color="info">
        Info State
      </Component>
      <Component info variant="outlined" color="info">
        Info State
      </Component>
    </Flex>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component loading variant="solid">
        Loading State
      </Component>
      <Component loading variant="soft">
        Loading State
      </Component>
      <Component loading variant="plain">
        Loading State
      </Component>
      <Component loading variant="outlined">
        Loading State
      </Component>
    </Flex>
  ),
};

export const PlaceholderState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component placeholder variant="solid">
        Placeholder State
      </Component>
      <Component placeholder variant="soft">
        Placeholder State
      </Component>
      <Component placeholder variant="plain">
        Placeholder State
      </Component>
      <Component placeholder variant="outlined">
        Placeholder State
      </Component>
    </Flex>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component disabled variant="solid">
        Disabled State
      </Component>
      <Component disabled variant="soft">
        Disabled State
      </Component>
      <Component disabled variant="plain">
        Disabled State
      </Component>
      <Component disabled variant="outlined">
        Disabled State
      </Component>
    </Flex>
  ),
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
