import type { Dispatch, SetStateAction } from "react";

interface Props {
	imageUrl: string;
	setImageUrl: Dispatch<SetStateAction<string | undefined>>;
}

const ImageFullscreen = ({ imageUrl, setImageUrl }: Props) => {
	return (
		<>
			<div
				className="w-screen h-screen absolute bg-black/50 backdrop-blur-lg z-10 rounded-3xl  cursor-pointer"
				onClick={() => setImageUrl(undefined)}
			></div>
			<img
				src={imageUrl}
				className="z-11 absolute -translate-1/2 left-1/2 top-1/2 w-[calc(100%-4rem)] rounded-3xl border border-primary"
			/>
		</>
	);
};

export default ImageFullscreen;
