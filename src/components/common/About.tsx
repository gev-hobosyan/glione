import BlurCircle from "./common/BlurCircle";

const About = () => {
	return (
		<div
			id="about"
			className="text-white flex w-screen justify-center items-center ml-11 mt-7  text-[16px] relative"
		>
			<BlurCircle z="z-0" left="0" top="100px" />
			<div className="w-1/2 ">
				<h3 className="text-secondary text-[24px] mb-3 italic font-light">
					Venture into the depths. Conquer the code. Master Python.
				</h3>
				<p className="mt-3 mb-3">
					Glione is an interactive Python and Computer Science learning
					platform where every lesson is a dungeon, every challange is a
					monster.
				</p>
				<p className="mt-3 mb-3">
					<span className="text-primary/60 font-semibold text-lg">What is Glione?</span>
					<br />
					Glione turns learning Python into an adventure. Instead of dry
					tutorials you explore dungoens, slaying monsters. Solve coding
					challenges to defeat enemies, collect loot, and level up your
					character as your real-world skills grow.
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
