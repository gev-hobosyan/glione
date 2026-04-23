import BlurCircle from "@/components/common/BlurCircle";
import { t } from "i18next";

const About = () => {
	return (
		<div
			id="about"
			className="text-white flex w-screen justify-center items-center ml-11 mt-7  text-[16px] relative"
		>
			<BlurCircle z="z-0" left="0" top="100px" />
			<div className="w-1/2 ">
				<h3 className="text-secondary text-[24px] mb-3 italic font-light">
					{t("AboutTitle")}
				</h3>
				<p className="mt-3 mb-3">
					{t("AboutDesc")}
				</p>
				<p className="mt-3 mb-3">
					<span className="text-primary/60 font-semibold text-lg">{t("AboutQuestion")}</span>
					<br />
					{t("AboutDesc1")}
				</p>
			</div>
			<div className="w-1/2 flex items-center justify-center relative">
				<BlurCircle z="z-0" />
				<img src="/medusa.png" className="w-70" />
			</div>
		</div>
	);
};

export default About;
