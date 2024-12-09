import type { ButtonProps } from "../models";

export type IconButtonProps = Omit<
	ButtonProps,
	"Icon" | "children" | "iconVariant"
> & {
	children: JSX.Element;
};
