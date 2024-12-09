import { useMemo } from "react";
import { memoizeComponent } from "../commons/memo";
import type { BaseIconProps } from "./models";
import { colorStyles, sizeStyles } from "./styles";

export const BaseIcon = ({
	children,
	size = "md",
	color = "default",
	className,
}: BaseIconProps): JSX.Element => {
	const sizeStyle = useMemo(() => sizeStyles[size], [size]);
	const colorStyle = useMemo(() => colorStyles[color], [color]);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`${sizeStyle} ${colorStyle} ${className}`}
			viewBox="0 0 24 24"
		>
			{children}
		</svg>
	);
};

export default memoizeComponent({
	Component: BaseIcon,
	all: true,
});
