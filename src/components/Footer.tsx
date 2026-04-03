import BlurCircle from "./BlurCircle";

const Footer = () => {
	return (
		<footer className="px-4 md:px-5 lg:px-10">
			<div
				className="flex justify-between items-center px-5 py-5 relative overflow-clip"
			>
				<BlurCircle z="z-6" right="50%" top="60px" />

				<div className="flex justify-center items-center gap-25 max-md:gap-2 max-md:flex-col max-md:items-start">
					<img src="logo.svg" alt="Logo" className="h-6" />
					<p className="text-white text-xs">2026 Terminal Learning Ltd.</p>
				</div>

				<div className="flex items-center justify-center max-md:flex-col max-md:gap-2 gap-10">
					<p className="text-white text-xs cursor-pointer hover:underline">
						Privacy
					</p>
					<p className="text-white text-xs cursor-pointer hover:underline">
						Terms
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
