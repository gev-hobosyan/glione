import BlurCircle from "@/components/common/BlurCircle";
import About from "@/components/common/About";
import Card from "@/components/cards/Card";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import PriceCard from "@/components/cards/PriceCard";
import { useTranslation } from "react-i18next";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Link } from "react-router-dom";

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
				<BlurCircle z="z-5" />
				<div className="max-md:hidden">
					<BlurCircle z="z-1" left="50px" top="15px" />
					<BlurCircle z="z-1" right="20px" bottom="-6px" />
					<BlurCircle z="z-1" right="60px" top="30px" />
					<BlurCircle z="z-1" left="120px" bottom="45px" />
				</div>
				<div className="md:hidden">
					<BlurCircle z="z-1" left="-40px" top="-30px" />
					<BlurCircle z="z-1" left="-100px" bottom="-6px" />
					<BlurCircle z="z-1" right="-100px" top="30px" />
					<BlurCircle z="z-1" right="-120px" bottom="-100px" />
				</div>
				<img src="/medusa.png" width="300px" className="" />
				<p className="text-white text-2xl absolute top-[calc(50%+130px)] text-center mx-10">
					{t("Welcome")}
				</p>
				<div className="absolute top-[calc(50%+200px)]">
					<PrimaryButton>
						<Link to="/signup">{t("GetStarted")}</Link>
					</PrimaryButton>
				</div>
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
					title={t("Title")}
					description={t("Description")}
					text={t("Module")}
					buttonText={t("ButtonText")}
				/>
				<Card
					index={2}
					title={t("Title1")}
					description={t("Description1")}
					text={t("Module")}
					buttonText={t("ButtonText")}
				/>
				<Card
					index={3}
					title={t("Title2")}
					description={t("Description2")}
					text={t("Module")}
					buttonText={t("ButtonText")}
				/>
				<Card
					index={4}
					title={t("Title3")}
					description={t("Description3")}
					text={t("Module")}
					buttonText={t("ButtonText")}
				/>
			</div>

			<div
				id="pricing"
				className="flex gap-6 mx-10 my-10 items-center justify-between max-xl:flex-wrap max-xl:justify-center relative"
			>
				<BlurCircle z="z-0" right="30%" bottom="0px" />

				<PriceCard
					title={t("PriceCardTitle")}
					description={t("PriceCardDescription")}
					price={t("PriceCardPrice")}
					featureTitle={t("PriceCardFeatureTitle")}
					features={[
						t("PriceCardFeature"),
						t("PriceCardFeature1"),
						t("PriceCardFeature2"),
						t("PriceCardFeature3"),
						t("PriceCardFeature4"),
					]}
					active={true}
				/>

				<PriceCard
					title={t("PriceCardTitle1")}
					description={t("PriceCardDescription1")}
					price="$19.99"
					featureTitle={t("PriceCardFeatureTitle1")}
					features={[
						t("PriceCardFeature5"),
						t("PriceCardFeature6"),
						t("PriceCardFeature7"),
						t("PriceCardFeature8"),
						t("PriceCardFeature9"),
					]}
					effective={true}
				/>

				<PriceCard
					title={t("PriceCardTitle2")}
					description={t("PriceCardDescription2")}
					price="$49.99"
					featureTitle={t("PriceCardFeatureTitle2")}
					features={[
						t("PriceCardFeature10"),
						t("PriceCardFeature11"),
						t("PriceCardFeature12"),
						t("PriceCardFeature13"),
						t("PriceCardFeature14"),
					]}
				/>
			</div>

			<Footer />
		</>
	);
};

export default Landing;
