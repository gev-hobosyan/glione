interface Props {
	checked: boolean;
	handleSwitch: () => void;
}

const ToggleSwitch = ({ checked, handleSwitch }: Props) => {
	return (
		<>
			<input
				checked={checked}
				type="checkbox"
				id="contentTypeToggle"
				className="w-0 h-0 hidden peer"
				onChange={() => {
					handleSwitch();
				}}
			/>
			<label
				htmlFor="contentTypeToggle"
				className='w-20 h-10 relative block rounded-full cursor-pointer after:content-[""] after:w-8 after:h-8 after:absolute after:top-[0.2rem] after:left-[0.2rem] after:bg-white after:rounded-full peer-checked:after:left-11 after:transition-all peer-checked:after:translate-x-[0%] duration-300 peer-checked:bg-primary/70 border border-primary backdrop-blur scale-75'
			></label>
		</>
	);
};

export default ToggleSwitch;
