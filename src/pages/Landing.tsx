import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { GridScan } from "@/components/GridScan";
import Navbar from "@/components/Navbar";
import PriceCard from "@/components/PriceCard";

const Landing = () => {
	return (
		<>
			<div
				style={{
					width: window.innerWidth,
					height: window.innerHeight,
					position: "relative",
					backgroundColor: "black",
				}}
			></div>
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

			<div className="flex gap-6 mx-10 my-10 items-center justify-between">
				<PriceCard
					title="Starter"
					description="Perfect for beginners who want to explore Python fundamentals at their own pace."
					price="For Free"
					features={[
						"Access to beginner lessons",
						"Interactive coding exercises",
						"Community support",
						"10 practice challanges",
						"Progress tracking",
					]}
				/>

				<PriceCard
					title="Pro"
					description="For serious learners who want structured paths, real-world projects, and faster progress."
					price="$19.99"
					features={[
						"Everything in Starter",
						"Full access to all courses",
						"Real-world Python projects",
						"Unlimited practice challanges",
						"Priority support",
					]}
				/>

				<PriceCard
					title="Master"
					description="Advamced training designed to prepare you for professional Python development roles."
					price="$49.99"
					features={[
						"Everything in Pro",
						"Career-focused learning tracks",
						"1-on-1 mentor sessions",
						"Portfolio review",
						"Advanced topics (AI, Web, Automation)",
					]}
				/>
			</div>
			<Footer />
		</>
	);
};

export default Landing;
