import AddIcon from "./AddIcon";
import BaseIcon from "./BaseIcon";

export default {
	title: "Display/Icon",
	component: BaseIcon,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

const PlaceholderIcon = (args) => (
	<BaseIcon {...args}>
		<rect width="24" height="24" fill="currentColor" rx="6" />
	</BaseIcon>
);

export const IconSmall = {
	args: {
		size: "sm",
	},
	render: PlaceholderIcon,
};

export const IconMedium = {
	args: {
		size: "md",
	},
	render: PlaceholderIcon,
};

export const IconLarge = {
	args: {
		size: "lg",
	},
	render: PlaceholderIcon,
};

export const IconColorDefault = {
	args: {
		color: "default",
	},
	render: PlaceholderIcon,
};

export const IconColorPrimary = {
	args: {
		color: "primary",
	},
	render: PlaceholderIcon,
};

export const IconColorSecondary = {
	args: {
		color: "secondary",
	},
	render: PlaceholderIcon,
};

export const IconColorDisabled = {
	args: {
		color: "disabled",
	},
	render: PlaceholderIcon,
};

export const IconWithClassname = {
	args: {
		className: "border-2 border-surface-primary p-1",
	},
	render: PlaceholderIcon,
};

export const Add = {
	render: (args) => <AddIcon {...args} />,
};
