import { useState } from "react";
import Input from "@/components/inputs/Input";
import BlurCircle from "@/components/common/BlurCircle";

const AddName = () => {
	const [userName, setUserName] = useState("");

	return (
		<div className="w-screen h-screen absolute top-0 left-0 bg-black/70 backdrop-blur-xs flex items-center justify-center">
			<BlurCircle />
			<BlurCircle top="-80px" left="-70px" />
			<BlurCircle bottom="-150px" right="40px" />
			<BlurCircle right="-100px" top="100px" />
			<BlurCircle bottom="50px" left="50px" />

			<div className="w-150 h-120 bg-black/50 backdrop-blur-sm rounded-4xl border border-primary/50 shadow-effective flex items-center justify-center flex-col">
				<div className="flex flex-col items-center justify-center gap-5 text-center">
					<h1 className="text-white font-semibold text-2xl">
						Եկեք ծանոթանանք
					</h1>
					<p className="text-white/70">
						Կարծես թե մենք չգիտենք քո անունը:
						<br /> Օգնիր մեզ մի փոքր ավելին իմանալ քո մասին:
					</p>
				</div>
				<form className="mt-15">
					<Input
						id="username"
						value={userName}
						setValue={setUserName}
						type="text"
						autoFocus={true}
					>
						Username
					</Input>
					<input
						type="submit"
						className="bg-primary text-white rounded-xl w-70 flex py-2.5 flex-col mt-4 cursor-pointer hover:scale-105 transition-all duration-300"
						value="Հաստատել"
					></input>
				</form>
			</div>
		</div>
	);
};

export default AddName;
