import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Workout",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Workout",
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Workout",
    checked: false,
    disabled: true,
  },
};
