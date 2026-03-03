import BlurCircle from "@/components/BlurCircle";
import About from "@/components/About";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PriceCard from "@/components/PriceCard";

const Landing = () => {
	return (
		<>
			<div className="relative bg-black w-screen h-screen flex flex-col items-center justify-center">
				<BlurCircle z="z-10" />
				<BlurCircle z="z-10" left="50px" top="15px" />
				<BlurCircle z="z-10" right="20px" bottom="-6px" />
				<BlurCircle z="z-10" right="60px" top="30px" />
				<BlurCircle z="z-10" left="120px" bottom="45px" />
				<img src="/medusa.png" width="300px" className="" />
				<p className="text-white text-2xl absolute top-[calc(50%+130px)] text-center">
					Welcome Adventurer!! <br />
					I've been waiting for you
				</p>
			</div>
			<Navbar />

			<About />

			<div
				className="flex gap-6 mx-10 my-10 items-center justify-between max-xl:flex-wrap max-xl:justify-center"
				id="about"
			>
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

			<div className="flex gap-6 mx-10 my-10 items-center justify-between max-xl:flex-wrap max-xl:justify-center">
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
					active={true}
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
					effective={true}
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
