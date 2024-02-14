import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ComponentProps } from "react";
import { Button } from ".";

const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Test: StoryObj<ComponentProps<typeof Button>> = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("aaa")).toBeInTheDocument();
  },
};
