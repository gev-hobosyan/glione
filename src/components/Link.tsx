import { Link as LinkRoute } from "react-router-dom";

interface Props {
	name: string;
	to: string;
}

const Link = ({ name, to }: Props) => {
	return (
		<LinkRoute to={to} className="text-white underline decoration-2">
			{name}
		</LinkRoute>
	);
};

export default Link;
