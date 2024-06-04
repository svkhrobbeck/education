import { Meta, StoryObj } from "@storybook/react";
import { Advantages } from "@/components";

const meta = {
  title: "Components/Advantages",
  component: Advantages,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Advantages>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    advantages: [
      {
        title: "ReactJS class component",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.",
        id: "1",
      },
      {
        title: "VueJS directive",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.",
        id: "2",
      },
      {
        title: "NextJS Server Side Rendering",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.",
        id: "3",
      },
      {
        title: "SEO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.",
        id: "4",
      },
    ],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates expedita fugiat reiciendis sequi similique impedit nobis debitis minima quaerat eaque.",
  },
};
