const TextSection = () => {
    return (
        <div className="border flex items-center justify-center flex-col border-primary/40 bg-black/40 rounded-3xl h-full w-215">
            <p className="text-white text-wrap font-sans mb-7 text-xl">Evaporative Cooling</p>
            <div className="w-165 h-0.5 bg-white/20 mb-7"></div>
            <p className="text-white text-wrap ml-25 mr-25 font-sans text-s mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}

export default TextSection;