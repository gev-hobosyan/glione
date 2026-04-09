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
					Սովորիր Python այնպես, ինչպես երբեք չես սովորել
				</h3>
				<p className="mt-3 mb-3">
					Այս հավելվածը ծրագրավորումը վերածում է ինտերակտիվ խաղի՝ առանց ձանձրալի փաստաթղթերի և հոգնեցուցիչ տեսության: Դու կսկսես պարզ Hello World! մարտահրավերներից և կբարձրացնես մակարդակդ իրական ծրագրավորման տրամաբանության միջոցով՝ լուծելով խնդիրներ խաղալու ընթացքում:
				</p>
				<p className="mt-3 mb-3">
					Այն ստեղծված է սկսնակների համար, բայց նախագծված է քեզ հետ աճելու համար: Յուրաքանչյուր քայլ զգացվում է որպես առաջընթաց, այլ ոչ թե ճնշում:
				</p>
				<p className="mt-3">Խաղա: Փորձարկիր: Ստեղծիր:</p>
				<p>Բարի գալուստ Python սովորելու ավելի խելացի (և շատ ավելի զվարճալի) տարբերակ</p>
			</div>
			<div className="w-1/2 flex items-center justify-center relative">
				<BlurCircle z="z-0" />
				<img src="/medusa.png" className="w-70" />
			</div>
		</div>
	);
};

export default About;
