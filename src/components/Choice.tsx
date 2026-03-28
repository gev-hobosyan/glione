interface Props {
    children: string;
    isRight: boolean;
}


const Choice = ({ children, isRight }: Props) => {
    return (
        <div className="border border-primary/40 h-12 w-[calc(100%-100px)] flex items-center px-2">
            <input type="radio" className="appearance-none border border-white rounded-full w-4 h-4 transition-all checked:bg-primary hover:shadow-effective" />
            <p className="text-white ml-3">{children}</p>
        </div>
    )
}
export default Choice;