import { isNil } from "ramda";
import { useMemo } from "react";
import Text from "../Text/Text";
import { memoizeComponent } from "../commons/memo";
import type { ButtonProps } from "./models";
import {
	backgroundColorStyles,
	colorStyles,
	commonStyles,
	flexDirectionStyles,
	sizeStyles,
} from "./styles";

const Button = ({
	variant = "contained",
	size = "md",
	disabled = false,
	children,
	onClick,
	Icon,
	iconVariant = "start",
	className,
}: ButtonProps) => {
	const sizeStyle = useMemo(() => sizeStyles[size], [size]);

	const backgroundColorStyle = useMemo(() => {
		const styles = backgroundColorStyles[variant];
		return disabled ? styles.disabled : styles.normal;
	}, [variant, disabled]);

	const colorStyle = useMemo(() => {
		const styles = colorStyles[variant];
		return disabled ? styles.disabled : styles.normal;
	}, [variant, disabled]);

	const flexDirection = useMemo(
		() => flexDirectionStyles[iconVariant],
		[iconVariant],
	);

	const icon = useMemo(() => {
		if (isNil(Icon)) {
			return null;
		}

		return <Icon size="sm" className={colorStyle} />;
	}, [iconVariant, Icon, colorStyle]);

	return (
		<button
			role="button"
			className={`${commonStyles} ${backgroundColorStyle} ${colorStyle} ${sizeStyle} ${flexDirection} ${className}`}
			onClick={onClick}
			disabled={disabled}
			aria-label={children}
		>
			{icon}
			<Text className={colorStyle} size="lg">
				{children}
			</Text>
		</button>
	);
};

export default memoizeComponent<ButtonProps>({
	Component: Button,
	all: true,
});
