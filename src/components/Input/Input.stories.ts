import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Add a task",
  },
};

export const WithValue: Story = {
  args: {
    value: "Workout",
    placeholder: "Add a task",
  },
};

export const Disabled: Story = {
  args: {
    value: "",
    placeholder: "Add a task",
    disabled: true,
  },
};
