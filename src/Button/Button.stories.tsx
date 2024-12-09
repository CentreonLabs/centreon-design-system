import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import AddIcon from "../Icons/AddIcon";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "Input/Button",
	component: Button,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	args: { children: "Button", onClick: fn() },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
	args: {
		variant: "contained",
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

export const ContainedDisabled: Story = {
	args: {
		variant: "contained",
		disabled: true,
	},
};

export const FilledDisabled: Story = {
	args: {
		variant: "filled",
		disabled: true,
	},
};

export const TextDisabled: Story = {
	args: {
		variant: "text",
		disabled: true,
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
	},
};

export const IconStart: Story = {
	args: {
		Icon: AddIcon,
		iconVariant: "start",
	},
};

export const IconEnd: Story = {
	args: {
		Icon: AddIcon,
		iconVariant: "end",
	},
};

export const WithCustomClassName: Story = {
	args: {
		className: "bg-green-600",
	},
};
