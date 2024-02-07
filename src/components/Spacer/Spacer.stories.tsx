import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Layout/Spacer",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  component: Component,
  argTypes: {
    classes: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    props: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    component: {
      control: {
        type: "select",
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
    direction: {
      control: {
        type: "select",
      },
    },
    visualize: {
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
