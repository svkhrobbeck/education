import type { Meta, StoryObj } from "@storybook/react";
import { HhData } from "@/components";

const meta = {
  title: "Components/HhData",
  component: HhData,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HhData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hh: {
      count: 1200,
      juniorSalary: 600,
      middleSalary: 1200,
      seniorSalary: 1800,
    },
    category: "ReactJS",
  },
};
