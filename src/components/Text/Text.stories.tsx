import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Display/Text",
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
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "select",
      },
    },

    // Specialized Properties //

    align: {
      description: "Self-alignment of the text.",
      control: {
        type: "select",
      },
    },
    color: {
      description: "Color of the text.",
      control: {
        type: "select",
      },
    },
    href: {
      description: "URL to link to (Will override the element to an anchor tag).",
      control: {
        type: "text",
      },
    },
    shadow: {
      description: "Should the text have a shadow?",
      control: {
        type: "boolean",
      },
    },
    tint: {
      description: "Color tint of the text (does not apply to foreground or background colors).",
      control: {
        type: "select",
      },
    },
    variant: {
      description: "Variation of the text.",
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
    children: "Typography",
  },
};
