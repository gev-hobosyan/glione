import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { GridScan } from "@/components/GridScan";
import Navbar from "@/components/Navbar";

const Landing = () => {
	return (
		<>
			<div
				style={{
					width: window.innerWidth,
					height: window.innerHeight,
					position: "relative",
				}}
			>
				<GridScan
					sensitivity={0.55}
					lineThickness={1}
					linesColor="#006E2A"
					scanColor="#56AD2D"
					scanOpacity={0.4}
					gridScale={0.1}
					lineStyle="solid"
					lineJitter={0.2}
					scanDirection="pingpong"
					noiseIntensity={0.01}
					scanGlow={0.6}
					scanSoftness={2.5}
					scanDuration={2.5}
					scanDelay={0.5}
					scanOnClick={false}
				/>
			</div>
			<Navbar />

			<div className="flex gap-6 mx-10 my-10 items-center justify-between">
			<Card
				index={1}
				title="Learn Python"
				description="Hey hey hey. Learn Python with us the fun way"
				text={"Module"}
			/>
			<Card
				index={2}
				title="Games with Python"
				description="Create games using Python"
				text={"Module"}
			/>
			<Card
				index={3}
				title="Programming with Python"
				description="Create apps using Python"
				text={"Module"}
			/>
			<Card
				index={4}
				title="Python"
				description="Create games using Python"
				text={"Module"}
			/>
			</div>

			<Footer />
		</>
	);
};

export default Landing;
