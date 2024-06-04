import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Icons } from "@/assets";
import { Icon } from "@/components";

const meta = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      type: "string",
      control: "select",
      options: Object.keys(Icons),
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Check",
    color: "#000",
    width: 50,
    height: 50,
  },
};
