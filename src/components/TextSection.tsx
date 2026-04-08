import type { Step } from "@/utils/types";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
	step: Step;
}

const TextSection = ({ step }: Props) => {
	return (
		<div className="flex items-center justify-center flex-col h-full w-full relative">
			<p className="text-white text-wrap font-sans mb-7 text-xl">
				{step.title}
			</p>
			<div className="w-165 h-0.5 bg-white/20 mb-7"></div>
			<p className="text-white text-wrap ml-25 mr-25 font-sans text-s mb-20">
				{step.content}
			</p>

	
	
	
	
<div className="flex justify-center gap-6  text-white absolute bottom-10  ">
	

<button className=" group flex items-center gap-2 border border-white 
    rounded-full px-6 py-2 text-sm cursor-pointer">
    <ArrowLeft className=" transition duration-300 group-hover:-translate-x-0.5" size={18} />
    Previous
  </button>

  <button className=" group flex items-center gap-2 bg-green-900 
    rounded-full px-10 py-2 text-sm cursor-pointer">
    Next
    <ArrowRight className="transition duration-300 group-hover:translate-x-0.5" size={18} />
  </button>

  
  </div>
  

</div>
	
	);
};

export default TextSection;



