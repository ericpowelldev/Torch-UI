import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import { MdPower, MdPowerOff } from "react-icons/md";

const meta: Meta<typeof Component> = {
  title: "Inputs/Toggle",
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
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "radio",
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
      description: "Variation of the toggle.",
      control: {
        type: "radio",
      },
      table: {
        disable: true,
      },
    },
    color: {
      description: "Color of the toggle.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "Color tint of the toggle.",
      control: {
        type: "select",
      },
    },
    size: {
      description: "Size of the toggle.",
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
    iconChecked: {
      description: "Icon to display when the toggle is on.",
      table: {
        disable: true,
      },
    },
    iconUnchecked: {
      description: "Icon to display when the toggle is off.",
      table: {
        disable: true,
      },
    },
    disabled: {
      description: "Should the toggle be in a disabled state?",
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
    disabled: true,
    defaultChecked: true,
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
