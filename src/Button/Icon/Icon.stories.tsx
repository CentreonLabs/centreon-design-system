import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import AddIcon from "../../Icons/AddIcon";
import IconButton from "./Icon";

const meta: Meta<typeof IconButton> = {
	title: "Input/IconButton",
	component: IconButton,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	args: { children: <AddIcon size="full" />, onClick: fn() },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {},
};

export const Large: Story = {
	args: {
		size: "lg",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export const Filled: Story = {
	args: {
		variant: "filled",
	},
};

export const Text: Story = {
	args: {
		variant: "text",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
