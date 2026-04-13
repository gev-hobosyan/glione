import { Link as LinkRoute } from "react-router-dom";

interface Props {
	name: string;
	to: string;
}

/**
 * A wrapper for Link component from React Router DOM with Custom CSS
 * @param name (string) the text to display
 * @param to (string) the href to redirect to
 */
const Link = ({ name, to }: Props) => {
	return (
		<LinkRoute to={to} className="text-white underline decoration-2">
			{name}
		</LinkRoute>
	);
};

export default Link;
