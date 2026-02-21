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
    colorOverride: {
      description: "Override the color with the default color or the inverse color.",
      control: {
        type: "radio",
      },
    },
    disabled: {
      description: "Should the button be in a disabled state?",
      control: {
        type: "boolean",
      },
    },
    elevation: {
      description: "Elevation level of the button.",
      control: {
        type: "select",
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
    rounded: {
      description: "Should the button be rounded?",
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "Size of the button.",
      control: {
        type: "select",
      },
    },
    suspended: {
      description: "Should the button be in a suspended state?",
      control: {
        type: "boolean",
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
        type: "select",
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
  render: (args) => (
    <Flex container direction="column" gap={3}>
      <Flex container gap={2}>
        <Component style={{ width: 160 }} variant="solid" color="primary" {...args}>
          Primary Solid
        </Component>
        <Component style={{ width: 160 }} variant="soft" color="primary" {...args}>
          Primary Soft
        </Component>
        <Component style={{ width: 160 }} variant="plain" color="primary" {...args}>
          Primary Plain
        </Component>
        <Component style={{ width: 160 }} variant="outlined" color="primary" {...args}>
          Primary Outlined
        </Component>
        <Component style={{ width: 160 }} variant="glass" color="primary" {...args}>
          Primary Glass
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 160 }} variant="solid" color="secondary" {...args}>
          Secondary Solid
        </Component>
        <Component style={{ width: 160 }} variant="soft" color="secondary" {...args}>
          Secondary Soft
        </Component>
        <Component style={{ width: 160 }} variant="plain" color="secondary" {...args}>
          Secondary Plain
        </Component>
        <Component style={{ width: 160 }} variant="outlined" color="secondary" {...args}>
          Secondary Outlined
        </Component>
        <Component style={{ width: 160 }} variant="glass" color="secondary" {...args}>
          Secondary Glass
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 160 }} variant="solid" color="utility" {...args}>
          Utility Solid
        </Component>
        <Component style={{ width: 160 }} variant="soft" color="utility" {...args}>
          Utility Soft
        </Component>
        <Component style={{ width: 160 }} variant="plain" color="utility" {...args}>
          Utility Plain
        </Component>
        <Component style={{ width: 160 }} variant="outlined" color="utility" {...args}>
          Utility Outlined
        </Component>
        <Component style={{ width: 160 }} variant="glass" color="utility" {...args}>
          Utility Glass
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 160 }} variant="solid" color="error" {...args}>
          Error Solid
        </Component>
        <Component style={{ width: 160 }} variant="soft" color="error" {...args}>
          Error Soft
        </Component>
        <Component style={{ width: 160 }} variant="plain" color="error" {...args}>
          Error Plain
        </Component>
        <Component style={{ width: 160 }} variant="outlined" color="error" {...args}>
          Error Outlined
        </Component>
        <Component style={{ width: 160 }} variant="glass" color="error" {...args}>
          Error Glass
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 160 }} variant="solid" color="warning" {...args}>
          Warning Solid
        </Component>
        <Component style={{ width: 160 }} variant="soft" color="warning" {...args}>
          Warning Soft
        </Component>
        <Component style={{ width: 160 }} variant="plain" color="warning" {...args}>
          Warning Plain
        </Component>
        <Component style={{ width: 160 }} variant="outlined" color="warning" {...args}>
          Warning Outlined
        </Component>
        <Component style={{ width: 160 }} variant="glass" color="warning" {...args}>
          Warning Glass
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 160 }} variant="solid" color="success" {...args}>
          Success Solid
        </Component>
        <Component style={{ width: 160 }} variant="soft" color="success" {...args}>
          Success Soft
        </Component>
        <Component style={{ width: 160 }} variant="plain" color="success" {...args}>
          Success Plain
        </Component>
        <Component style={{ width: 160 }} variant="outlined" color="success" {...args}>
          Success Outlined
        </Component>
        <Component style={{ width: 160 }} variant="glass" color="success" {...args}>
          Success Glass
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component style={{ width: 160 }} variant="solid" color="info" {...args}>
          Info Solid
        </Component>
        <Component style={{ width: 160 }} variant="soft" color="info" {...args}>
          Info Soft
        </Component>
        <Component style={{ width: 160 }} variant="plain" color="info" {...args}>
          Info Plain
        </Component>
        <Component style={{ width: 160 }} variant="outlined" color="info" {...args}>
          Info Outlined
        </Component>
        <Component style={{ width: 160 }} variant="glass" color="info" {...args}>
          Info Glass
        </Component>
      </Flex>
    </Flex>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component variant="solid" icon={<MdRocketLaunch />} {...args}>
        Button with Icon
      </Component>
      <Component variant="soft" icon={<MdRocketLaunch />} {...args}>
        Button with Icon
      </Component>
      <Component variant="plain" icon={<MdRocketLaunch />} {...args}>
        Button with Icon
      </Component>
      <Component variant="outlined" icon={<MdRocketLaunch />} {...args}>
        Button with Icon
      </Component>
      <Component variant="glass" icon={<MdRocketLaunch />} {...args}>
        Button with Icon
      </Component>
    </Flex>
  ),
};

export const WithEmoji: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component variant="solid" icon="🚀" {...args}>
        Button with Emoji
      </Component>
      <Component variant="soft" icon="🚀" {...args}>
        Button with Emoji
      </Component>
      <Component variant="plain" icon="🚀" {...args}>
        Button with Emoji
      </Component>
      <Component variant="outlined" icon="🚀" {...args}>
        Button with Emoji
      </Component>
      <Component variant="glass" icon="🚀" {...args}>
        Button with Emoji
      </Component>
    </Flex>
  ),
};

export const ErrorState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component error variant="solid" color="error" {...args}>
        Error State
      </Component>
      <Component error variant="soft" color="error" {...args}>
        Error State
      </Component>
      <Component error variant="plain" color="error" {...args}>
        Error State
      </Component>
      <Component error variant="outlined" color="error" {...args}>
        Error State
      </Component>
      <Component error variant="glass" color="error" {...args}>
        Error State
      </Component>
    </Flex>
  ),
};

export const WarningState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component warning variant="solid" color="warning" {...args}>
        Warning State
      </Component>
      <Component warning variant="soft" color="warning" {...args}>
        Warning State
      </Component>
      <Component warning variant="plain" color="warning" {...args}>
        Warning State
      </Component>
      <Component warning variant="outlined" color="warning" {...args}>
        Warning State
      </Component>
      <Component warning variant="glass" color="warning" {...args}>
        Warning State
      </Component>
    </Flex>
  ),
};

export const SuccessState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component success variant="solid" color="success" {...args}>
        Success State
      </Component>
      <Component success variant="soft" color="success" {...args}>
        Success State
      </Component>
      <Component success variant="plain" color="success" {...args}>
        Success State
      </Component>
      <Component success variant="outlined" color="success" {...args}>
        Success State
      </Component>
      <Component success variant="glass" color="success" {...args}>
        Success State
      </Component>
    </Flex>
  ),
};

export const InfoState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component info variant="solid" color="info" {...args}>
        Info State
      </Component>
      <Component info variant="soft" color="info" {...args}>
        Info State
      </Component>
      <Component info variant="plain" color="info" {...args}>
        Info State
      </Component>
      <Component info variant="outlined" color="info" {...args}>
        Info State
      </Component>
      <Component info variant="glass" color="info" {...args}>
        Info State
      </Component>
    </Flex>
  ),
};

export const LoadingState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component loading variant="solid" {...args}>
        Loading State
      </Component>
      <Component loading variant="soft" {...args}>
        Loading State
      </Component>
      <Component loading variant="plain" {...args}>
        Loading State
      </Component>
      <Component loading variant="outlined" {...args}>
        Loading State
      </Component>
      <Component loading variant="glass" {...args}>
        Loading State
      </Component>
    </Flex>
  ),
};

export const SuspendedState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component suspended variant="solid" {...args}>
        Suspended State
      </Component>
      <Component suspended variant="soft" {...args}>
        Suspended State
      </Component>
      <Component suspended variant="plain" {...args}>
        Suspended State
      </Component>
      <Component suspended variant="outlined" {...args}>
        Suspended State
      </Component>
      <Component suspended variant="glass" {...args}>
        Suspended State
      </Component>
    </Flex>
  ),
};

export const DisabledState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component disabled variant="solid" {...args}>
        Disabled State
      </Component>
      <Component disabled variant="soft" {...args}>
        Disabled State
      </Component>
      <Component disabled variant="plain" {...args}>
        Disabled State
      </Component>
      <Component disabled variant="outlined" {...args}>
        Disabled State
      </Component>
      <Component disabled variant="glass" {...args}>
        Disabled State
      </Component>
    </Flex>
  ),
};

export const Tint100: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" tint="100" {...args}>
        Primary
      </Component>
      <Component color="secondary" tint="100" {...args}>
        Secondary
      </Component>
      <Component color="utility" tint="100" {...args}>
        Utility
      </Component>
      <Component color="error" tint="100" {...args}>
        Error
      </Component>
      <Component color="warning" tint="100" {...args}>
        Warning
      </Component>
      <Component color="success" tint="100" {...args}>
        Success
      </Component>
      <Component color="info" tint="100" {...args}>
        Info
      </Component>
    </Flex>
  ),
};

export const Tint300: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" tint="300" {...args}>
        Primary
      </Component>
      <Component color="secondary" tint="300" {...args}>
        Secondary
      </Component>
      <Component color="utility" tint="300" {...args}>
        Utility
      </Component>
      <Component color="error" tint="300" {...args}>
        Error
      </Component>
      <Component color="warning" tint="300" {...args}>
        Warning
      </Component>
      <Component color="success" tint="300" {...args}>
        Success
      </Component>
      <Component color="info" tint="300" {...args}>
        Info
      </Component>
    </Flex>
  ),
};

export const Tint500: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" {...args}>
        Primary
      </Component>
      <Component color="secondary" {...args}>
        Secondary
      </Component>
      <Component color="utility" {...args}>
        Utility
      </Component>
      <Component color="error" {...args}>
        Error
      </Component>
      <Component color="warning" {...args}>
        Warning
      </Component>
      <Component color="success" {...args}>
        Success
      </Component>
      <Component color="info" {...args}>
        Info
      </Component>
    </Flex>
  ),
};

export const Tint700: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" tint="700" {...args}>
        Primary
      </Component>
      <Component color="secondary" tint="700" {...args}>
        Secondary
      </Component>
      <Component color="utility" tint="700" {...args}>
        Utility
      </Component>
      <Component color="error" tint="700" {...args}>
        Error
      </Component>
      <Component color="warning" tint="700" {...args}>
        Warning
      </Component>
      <Component color="success" tint="700" {...args}>
        Success
      </Component>
      <Component color="info" tint="700" {...args}>
        Info
      </Component>
    </Flex>
  ),
};

export const Tint900: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" tint="900" {...args}>
        Primary
      </Component>
      <Component color="secondary" tint="900" {...args}>
        Secondary
      </Component>
      <Component color="utility" tint="900" {...args}>
        Utility
      </Component>
      <Component color="error" tint="900" {...args}>
        Error
      </Component>
      <Component color="warning" tint="900" {...args}>
        Warning
      </Component>
      <Component color="success" tint="900" {...args}>
        Success
      </Component>
      <Component color="info" tint="900" {...args}>
        Info
      </Component>
    </Flex>
  ),
};
