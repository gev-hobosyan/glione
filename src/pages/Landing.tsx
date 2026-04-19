import BlurCircle from "@/components/common/BlurCircle";
import About from "@/components/common/About";
import Card from "@/components/cards/Card";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import PriceCard from "@/components/cards/PriceCard";
import { useTranslation } from "react-i18next";

const Landing = () => {
	const { t } = useTranslation();

	return (
		<>
			<img
				src="/medusa.png"
				width="100px"
				className="fixed z-50 bottom-10 right-10 bg-primary/30 backdrop-blur-2xl rounded-full border border-primary"
			/>

			<div
				className="relative bg-black w-screen h-screen flex flex-col items-center justify-center"
				id="home"
			>
				<BlurCircle z="z-10" />
				<BlurCircle z="z-10" left="50px" top="15px" />
				<BlurCircle z="z-10" right="20px" bottom="-6px" />
				<BlurCircle z="z-10" right="60px" top="30px" />
				<BlurCircle z="z-10" left="120px" bottom="45px" />
				<img src="/medusa.png" width="300px" className="" />
				<p className="text-white text-2xl absolute top-[calc(50%+130px)] text-center">
					{t("Welcome")}
				</p>
			</div>
			<Navbar />

			<About />

			<div
				id="courses"
				className="flex gap-6 mx-10 my-10 items-center justify-between max-xl:flex-wrap max-xl:justify-center relative"
			>
				<BlurCircle z="z-0" right="50%" top="100px" />

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

			<div
				id="pricing"
				className="flex gap-6 mx-10 my-10 items-center justify-between max-xl:flex-wrap max-xl:justify-center relative"
			>
				<BlurCircle z="z-0" right="30%" bottom="0px" />

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
