import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Pyodide } from "../../lib/pyodide.ts";
import { PlayIcon } from "lucide-react";

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getOutput: (...data: any[]) => void;
}

/**
 * The CodeEditor used in the project
 *
 */
const CodeEditor = ({ getOutput }: Props) => {
	const [value, setValue] = useState(``);

	const pyodide = Pyodide.getInstance();

	pyodide.setOutput(getOutput);

	const monaco = useMonaco();

	useEffect(() => {
		if (monaco) {
			monaco.editor.defineTheme("myTheme", {
				base: "vs-dark",
				inherit: true,
				rules: [
					{ token: "string", foreground: "#56AD2D" },
					{ token: "comment", foreground: "#6D8461" },
					{ token: "variable", foreground: "#000000" },
					{ token: "number", foreground: "#09885A" },
					{ token: "keyword", foreground: "#09885A" },
				],
				colors: {
					"editor.background": "#101010",
					"editorCursor.foreground": "#56AD2D",
					"editor.foreground": "#ffffff",
					"editor.errorForeground": "#BF170E",
					"editor.lineHighlightBorder": "#101010",
					"editor.selectionBackground": "#404040",
					"editor.lineHighlightBackground": "#242424",
					"editorLineNumber.foreground": "#56AD2D",
					"editorLineNumber.activeForeground": "#006E2A",
				},
			});
			monaco.editor.setTheme("myTheme");
		}
	}, [monaco]);

	return (
		<div className="border border-primary rounded-4xl px-6 pt-10 pb-4 relative">
			<Editor
				height="50vh"
				language="python"
				theme="vs-dark"
				width="50vw"
				value={value}
				onChange={(value) => {
					setValue(value!);
				}}
				options={{
					fontSize: 18,
					fontFamily: "JetBrains Mono",
					fontLigatures: true,
					scrollBeyondLastLine: false,
					minimap: {
						enabled: false,
					},
					bracketPairColorization: {
						enabled: false,
					},
				}}
			/>
			<PlayIcon
				className="stroke-secondary fill-secondary absolute top-3 right-5"
				onClick={() => {
					getOutput("");
					pyodide.run(value);
				}}
			>
				Run
			</PlayIcon>
		</div>
	);
};

export default CodeEditor;
