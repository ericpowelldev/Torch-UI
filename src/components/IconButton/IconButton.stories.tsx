import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import { MdRocketLaunch, MdSettings, MdDelete } from "react-icons/md";
import Flex from "../Flex";

const meta: Meta<typeof Component> = {
  title: "Inputs/IconButton",
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
        type: "object",
        disable: true,
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
      description: "Size of the icon button.",
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
    children: <MdRocketLaunch />,
  },
};

export const VariantsAndColors: Story = {
  render: (args) => (
    <Flex container direction="column" gap={3}>
      <Flex container gap={2}>
        <Component variant="solid" color="primary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="primary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="primary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="primary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="glass" color="primary" {...args}>
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="secondary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="secondary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="secondary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="secondary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="glass" color="secondary" {...args}>
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="tertiary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="tertiary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="tertiary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="tertiary" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="glass" color="tertiary" {...args}>
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="utility" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="utility" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="utility" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="utility" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="glass" color="utility" {...args}>
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="error" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="error" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="error" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="error" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="glass" color="error" {...args}>
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="warning" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="warning" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="warning" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="warning" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="glass" color="warning" {...args}>
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="success" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="success" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="success" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="success" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="glass" color="success" {...args}>
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="info" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="info" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="info" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="info" {...args}>
          <MdRocketLaunch />
        </Component>
        <Component variant="glass" color="info" {...args}>
          <MdRocketLaunch />
        </Component>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Flex container gap={2} alignItems="center">
      <Component size="min" variant="solid" color="primary" {...args}>
        <MdSettings />
      </Component>
      <Component size="xs" variant="solid" color="primary" {...args}>
        <MdSettings />
      </Component>
      <Component size="sm" variant="solid" color="primary" {...args}>
        <MdSettings />
      </Component>
      <Component size="md" variant="solid" color="primary" {...args}>
        <MdSettings />
      </Component>
      <Component size="lg" variant="solid" color="primary" {...args}>
        <MdSettings />
      </Component>
      <Component size="xl" variant="solid" color="primary" {...args}>
        <MdSettings />
      </Component>
      <Component size="max" variant="solid" color="primary" {...args}>
        <MdSettings />
      </Component>
    </Flex>
  ),
};

export const WithEmoji: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component variant="solid" {...args}>
        🚀
      </Component>
      <Component variant="soft" {...args}>
        🚀
      </Component>
      <Component variant="plain" {...args}>
        🚀
      </Component>
      <Component variant="outlined" {...args}>
        🚀
      </Component>
      <Component variant="glass" {...args}>
        🚀
      </Component>
    </Flex>
  ),
};

export const LoadingState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component loading variant="solid" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component loading variant="soft" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component loading variant="plain" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component loading variant="outlined" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component loading variant="glass" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const SuspendedState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component suspended variant="solid" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component suspended variant="soft" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component suspended variant="plain" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component suspended variant="outlined" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component suspended variant="glass" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const DisabledState: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component disabled variant="solid" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component disabled variant="soft" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component disabled variant="plain" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component disabled variant="outlined" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component disabled variant="glass" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint100: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" tint="100" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" tint="100" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="tertiary" tint="100" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="utility" tint="100" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="error" tint="100" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="warning" tint="100" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="success" tint="100" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="info" tint="100" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint300: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" tint="300" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" tint="300" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="tertiary" tint="300" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="utility" tint="300" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="error" tint="300" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="warning" tint="300" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="success" tint="300" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="info" tint="300" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint500: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="tertiary" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="utility" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="error" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="warning" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="success" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="info" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint700: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" tint="700" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" tint="700" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="tertiary" tint="700" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="utility" tint="700" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="error" tint="700" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="warning" tint="700" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="success" tint="700" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="info" tint="700" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint900: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component color="primary" tint="900" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" tint="900" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="tertiary" tint="900" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="utility" tint="900" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="error" tint="900" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="warning" tint="900" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="success" tint="900" {...args}>
        <MdRocketLaunch />
      </Component>
      <Component color="info" tint="900" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const CommonActions: Story = {
  render: (args) => (
    <Flex container gap={2}>
      <Component variant="solid" color="primary" title="Settings" {...args}>
        <MdSettings />
      </Component>
      <Component variant="outlined" color="primary" title="Delete" {...args}>
        <MdDelete />
      </Component>
      <Component variant="plain" color="primary" title="Launch" {...args}>
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};
