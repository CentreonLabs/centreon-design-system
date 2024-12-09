import { memoizeComponent } from "../commons/memo";
import BaseIcon from "./BaseIcon";
import type { IconProps } from "./models";

const AddIcon = (props: IconProps): JSX.Element => {
	return (
		<BaseIcon {...props}>
			<path fill="currentColor" d="M11 0h2v24h-2z" />
			<path fill="currentColor" d="M0 13v-2h24v2z" />
		</BaseIcon>
	);
};

export default memoizeComponent({
	Component: AddIcon,
	all: true,
});
