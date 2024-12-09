import type { MemoExoticComponent, MouseEventHandler } from "react";
import type { IconProps } from "../Icons/models";
import type { Size } from "../commons/models";

export interface ButtonProps {
	size?: Size;
	variant?: "contained" | "filled" | "text";
	onClick: MouseEventHandler<HTMLButtonElement>;
	Icon?:
		| ((props: IconProps) => JSX.Element)
		| MemoExoticComponent<(props: IconProps) => JSX.Element | null | undefined>;
	iconVariant?: "start" | "end";
	children: string;
	disabled?: boolean;
	className?: string;
}
