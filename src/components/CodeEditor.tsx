import Editor from "@monaco-editor/react";
import { type Dispatch } from "react";
import { Pyodide } from "../lib/pyodide.js";

interface Props {
	value: string;
	setValue: Dispatch<React.SetStateAction<string>>;
}

/**
 * The CodeEditor used in the project
 *
 * @param {string} value Store the code in this variable
 * @param {Dispatch} setValue The react useEffect hook function to change the value
 *
 */
const CodeEditor = ({ value, setValue }: Props) => {
	const pyodide = Pyodide.getInstance();

	return (
		<>
			<Editor
				height="50vh"
				language="python"
				theme="vs-dark"
				width="80vh"
				value={value}
				onChange={(value) => {
					setValue(value!);
					console.log(value);
				}}
			/>
			<button
				className="text-white"
				onClick={() => {
					pyodide.run(value);
				}}
			>
				Run
			</button>
		</>
	);
};

export default CodeEditor;
