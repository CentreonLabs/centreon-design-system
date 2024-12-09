import { useMemo } from "react";
import { memoizeComponent } from "../../commons/memo";
import { backgroundColorStyles, colorStyles } from "../styles";
import type { IconButtonProps } from "./models";
import { sizeStyles } from "./styles";

const IconButton = ({
	variant = "contained",
	size = "md",
	onClick,
	disabled,
	className,
	children,
}: IconButtonProps) => {
	const sizeStyle = useMemo(() => sizeStyles[size], [size]);

	const backgroundColorStyle = useMemo(() => {
		const styles = backgroundColorStyles[variant];
		return disabled ? styles.disabled : styles.normal;
	}, [variant, disabled]);

	const colorStyle = useMemo(() => {
		const styles = colorStyles[variant];
		return disabled ? styles.disabled : styles.normal;
	}, [variant, disabled]);

	return (
		<button
			role="button"
			className={`rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out ${backgroundColorStyle} ${colorStyle} ${sizeStyle} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default memoizeComponent<IconButtonProps>({
	Component: IconButton,
	all: true,
});
