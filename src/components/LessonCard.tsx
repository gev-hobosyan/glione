interface Props {
	name: string;
	description: string;
	level: string;
	progress: number;
	color: string;
}

const LessonCard = ({ name, description, level, progress, color }: Props) => {
	return (
		<div
			className={`w-64 h-64  border  text-white font-bold rounded-4xl p-2 flex flex-col justify-between bg-${color}/40 border-${color}`}
		>
			<h2 className="text-2xl mb-1 ">{name}</h2>

			<div>
				<p className="text-sm opacity-80 text-gray-300">{description}</p>

				<p className="text-xs opacity-50 mt-15 text-gray-300 ">
					Level: {level} | Progress: {progress}%
				</p>
			</div>
		</div>
	);
};

export default LessonCard;
