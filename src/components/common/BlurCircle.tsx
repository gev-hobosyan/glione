interface Props {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
	size?: number;
	z?: string;
}

/**
 * This component is used as a design element (a green circle).
 * @param {string} top - sets the CSS top position of the circle.
 * @param {string} bottom - sets the CSS bottom position.
 * @param {string} left -  sets the CSS left position.
 * @param {string} right - sets the CSS right position.
 * @param {number} size - controls the width/height of the circle (currently unused).
 * @param {string} z - controls the Tailwind z-index class. Determines stacking order (e.g. behind or above content).
 */
const BlurCircle = ({
	top = "auto",
	bottom = "auto",
	left = "auto",
	right = "auto",
	z = "-z-50",
}: Props) => {
	return (
		<>
			<div
				className={`circle absolute ${z} h-58 w-58 aspect-square rounded-full bg-primary/70 blur-3xl`}
				style={{ top: top, bottom: bottom, left: left, right: right }}
			></div>
		</>
	);
};

export default BlurCircle;
