import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import { MdPower, MdPowerOff } from "react-icons/md";

const meta: Meta<typeof Component> = {
  title: "Inputs/Toggle",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  component: Component,
  argTypes: {
    className: {
      description: "Class of the component.",
      table: {
        disable: true,
      },
    },
    classes: {
      description: "Classes object of the component.",
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
    props: {
      description: "Inner properties of the component.",
      table: {
        disable: true,
      },
    },
    variant: {
      description: "The variant of the toggle.",
      control: {
        type: "radio",
      },
      table: {
        disable: true,
      },
    },
    color: {
      description: "The color of the toggle.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "The color tint of the toggle.",
      control: {
        type: "select",
      },
    },
    size: {
      description: "The size of the toggle.",
      control: {
        type: "radio",
      },
    },
    shadowTrack: {
      description: "Should the toggle track have a shadow?",
      control: {
        type: "boolean",
      },
    },
    shadowSlide: {
      description: "Should the toggle slide have a shadow?",
      control: {
        type: "boolean",
      },
    },
    checked: {
      description: "Should the toggle be checked?",
      control: {
        type: "boolean",
      },
      table: {
        disable: true,
      },
    },
    disabled: {
      description: "Should the button be disabled?",
      control: {
        type: "boolean",
      },
    },
    iconChecked: {
      description: "The icon to display when the toggle is on.",
      table: {
        disable: true,
      },
    },
    iconUnchecked: {
      description: "The icon to display when the toggle is off.",
      table: {
        disable: true,
      },
    },
    tooltip: {
      description: "The content inside of the tooltip.",
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
};

export const WithIcons: Story = {
  args: {
    iconChecked: <MdPower />,
    iconUnchecked: <MdPowerOff />,
  },
};

export const WithEmojis: Story = {
  args: {
    iconChecked: "🌞",
    iconUnchecked: "🌚",
  },
};
