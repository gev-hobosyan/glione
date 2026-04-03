import BlurCircle from "./BlurCircle";

const About = () => {
	return (
		<div
			id="about"
			className="text-white flex w-screen justify-center items-center ml-11 mt-7  text-[16px] relative"
		>
			<BlurCircle z="z-0" left="0" top="100px"/>
			<div className="w-1/2 ">
				<h3 className="text-secondary text-[24px] mb-3">
					Learn Python like you've never learned anything before
				</h3>
				<p className="mt-3 mb-3">
					This app turns coding into an interactive game - no boring docs,
					no overwhelming theory. You'll start with simple Hello World!
					challanges and level up through real programming logic, solving
					problems as you play.
				</p>
				<p className="mt-3 mb-3">
					It is built for beginners, but designed to grow with you. Every
					step feels like progress, not pressure.
				</p>
				<p className="mt-3">Play. Experiment. Built.</p>
				<p>Welcome to a smarter (and way more fun) way to learn Python</p>
			</div>
			<div className="w-1/2 flex items-center justify-center relative">
				<BlurCircle z="z-0" />
				<img src="/medusa.png" className="w-70" />
			</div>
		</div>
	);
};

export default About;
