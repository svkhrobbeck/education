import { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    appearance: {
      control: "radio",
      options: ["primary", "white"],
    },
  },
  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates expedita fugiat reiciendis sequi similique impedit nobis debitis minima quaerat eaque.s",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "primary",
  },
};
