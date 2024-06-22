import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Layout/Spacer",
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

    // Specialized Properties //
    
    size: {
      description: "Size of the spacer.",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    direction: {
      description: "Direction of the spacer.",
      control: {
        type: "radio",
      },
    },
    visualize: {
      description: "Should the component be visualized?",
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
    visualize: true,
  },
};
