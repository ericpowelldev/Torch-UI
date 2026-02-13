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
    disabled: {
      description: "Should the button be in a disabled state?",
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
    shadowIcon: {
      description: "Should the icon have a drop shadow? (solid variant only)",
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "Size of the icon button.",
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
    children: <MdRocketLaunch />,
  },
};

export const VariantsAndColors: Story = {
  render: () => (
    <Flex container direction="column" gap={3}>
      <Flex container gap={2}>
        <Component variant="solid" color="primary">
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="primary">
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="primary">
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="primary">
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="secondary">
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="secondary">
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="secondary">
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="secondary">
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="utility">
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="utility">
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="utility">
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="utility">
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="error">
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="error">
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="error">
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="error">
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="warning">
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="warning">
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="warning">
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="warning">
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="success">
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="success">
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="success">
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="success">
          <MdRocketLaunch />
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Component variant="solid" color="info">
          <MdRocketLaunch />
        </Component>
        <Component variant="soft" color="info">
          <MdRocketLaunch />
        </Component>
        <Component variant="plain" color="info">
          <MdRocketLaunch />
        </Component>
        <Component variant="outlined" color="info">
          <MdRocketLaunch />
        </Component>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex container gap={2} alignItems="center">
      <Component size="min" variant="solid" color="primary">
        <MdSettings />
      </Component>
      <Component size="xs" variant="solid" color="primary">
        <MdSettings />
      </Component>
      <Component size="sm" variant="solid" color="primary">
        <MdSettings />
      </Component>
      <Component size="md" variant="solid" color="primary">
        <MdSettings />
      </Component>
      <Component size="lg" variant="solid" color="primary">
        <MdSettings />
      </Component>
      <Component size="xl" variant="solid" color="primary">
        <MdSettings />
      </Component>
      <Component size="max" variant="solid" color="primary">
        <MdSettings />
      </Component>
    </Flex>
  ),
};

export const WithEmoji: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component variant="solid">🚀</Component>
      <Component variant="soft">🚀</Component>
      <Component variant="plain">🚀</Component>
      <Component variant="outlined">🚀</Component>
    </Flex>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component loading variant="solid">
        <MdRocketLaunch />
      </Component>
      <Component loading variant="soft">
        <MdRocketLaunch />
      </Component>
      <Component loading variant="plain">
        <MdRocketLaunch />
      </Component>
      <Component loading variant="outlined">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const PlaceholderState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component placeholder variant="solid">
        <MdRocketLaunch />
      </Component>
      <Component placeholder variant="soft">
        <MdRocketLaunch />
      </Component>
      <Component placeholder variant="plain">
        <MdRocketLaunch />
      </Component>
      <Component placeholder variant="outlined">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component disabled variant="solid">
        <MdRocketLaunch />
      </Component>
      <Component disabled variant="soft">
        <MdRocketLaunch />
      </Component>
      <Component disabled variant="plain">
        <MdRocketLaunch />
      </Component>
      <Component disabled variant="outlined">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Pill: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component pill variant="solid" color="primary">
        <MdRocketLaunch />
      </Component>
      <Component pill variant="soft" color="primary">
        <MdRocketLaunch />
      </Component>
      <Component pill variant="plain" color="primary">
        <MdRocketLaunch />
      </Component>
      <Component pill variant="outlined" color="primary">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint100: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary" tint="100">
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" tint="100">
        <MdRocketLaunch />
      </Component>
      <Component color="utility" tint="100">
        <MdRocketLaunch />
      </Component>
      <Component color="error" tint="100">
        <MdRocketLaunch />
      </Component>
      <Component color="warning" tint="100">
        <MdRocketLaunch />
      </Component>
      <Component color="success" tint="100">
        <MdRocketLaunch />
      </Component>
      <Component color="info" tint="100">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint300: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary" tint="300">
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" tint="300">
        <MdRocketLaunch />
      </Component>
      <Component color="utility" tint="300">
        <MdRocketLaunch />
      </Component>
      <Component color="error" tint="300">
        <MdRocketLaunch />
      </Component>
      <Component color="warning" tint="300">
        <MdRocketLaunch />
      </Component>
      <Component color="success" tint="300">
        <MdRocketLaunch />
      </Component>
      <Component color="info" tint="300">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint500: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary">
        <MdRocketLaunch />
      </Component>
      <Component color="secondary">
        <MdRocketLaunch />
      </Component>
      <Component color="utility">
        <MdRocketLaunch />
      </Component>
      <Component color="error">
        <MdRocketLaunch />
      </Component>
      <Component color="warning">
        <MdRocketLaunch />
      </Component>
      <Component color="success">
        <MdRocketLaunch />
      </Component>
      <Component color="info">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint700: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary" tint="700">
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" tint="700">
        <MdRocketLaunch />
      </Component>
      <Component color="utility" tint="700">
        <MdRocketLaunch />
      </Component>
      <Component color="error" tint="700">
        <MdRocketLaunch />
      </Component>
      <Component color="warning" tint="700">
        <MdRocketLaunch />
      </Component>
      <Component color="success" tint="700">
        <MdRocketLaunch />
      </Component>
      <Component color="info" tint="700">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const Tint900: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component color="primary" tint="900">
        <MdRocketLaunch />
      </Component>
      <Component color="secondary" tint="900">
        <MdRocketLaunch />
      </Component>
      <Component color="utility" tint="900">
        <MdRocketLaunch />
      </Component>
      <Component color="error" tint="900">
        <MdRocketLaunch />
      </Component>
      <Component color="warning" tint="900">
        <MdRocketLaunch />
      </Component>
      <Component color="success" tint="900">
        <MdRocketLaunch />
      </Component>
      <Component color="info" tint="900">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};

export const CommonActions: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component variant="solid" color="primary" title="Settings">
        <MdSettings />
      </Component>
      <Component variant="outlined" color="primary" title="Delete">
        <MdDelete />
      </Component>
      <Component variant="plain" color="primary" title="Launch">
        <MdRocketLaunch />
      </Component>
    </Flex>
  ),
};
