import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Layout/Box",
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
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "radio",
      },
    },

    // Specialized Properties //

    width: {
      description: "Width of the box.",
      control: {
        type: "number",
      },
    },
    height: {
      description: "Height of the box.",
      control: {
        type: "number",
      },
    },
    radius: {
      description: "Border radius of the box.",
      control: {
        type: "number",
      },
    },
    color: {
      description: "Color of the box.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "Color tint of the box.",
      control: {
        type: "select",
      },
    },
    shadow: {
      description: "Should the box have a shadow?",
      control: {
        type: "boolean",
      },
    },
    backdropBlur: {
      description: "Should the box have a backdrop blur?",
      control: {
        type: "boolean",
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
    width: "100%",
    height: 256,
    radius: 12,
  },
};
