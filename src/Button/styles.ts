export const commonStyles =
	"rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out gap-x-3";

export const flexDirectionStyles = {
	start: "flex-row",
	end: "flex-row-reverse",
};

export const sizeStyles = {
	lg: "h-10 px-6 text-label-lg",
	md: "h-9 px-4 text-label-lg",
	sm: "h-8 px-3 text-label-lg",
};

export const colorStyles = {
	contained: {
		normal: "text-text-invert",
		disabled: "text-text-disabled",
	},
	filled: {
		normal: "text-text",
		disabled: "text-text-secondary",
	},
	text: {
		normal: "text-text-primary",
		disabled: "text-text-disabled",
	},
};

export const backgroundColorStyles = {
	contained: {
		normal:
			"bg-surface-primary hover:bg-surface-primary-hover active:bg-surface-primary-pressed",
		disabled: "bg-surface-disabled",
	},
	filled: {
		normal:
			"bg-surface-primary-tonal hover:bg-surface-primary-hover-tonal active:bg-surface-primary-pressed-tonal",
		disabled: "bg-surface-disabled",
	},
	text: {
		normal:
			"bg-transparent hover:bg-surface-primary-hover-effect active:bg-surface-primary-pressed-effect",
		disabled: "bg-transparent",
	},
};
