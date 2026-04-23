import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Pyodide } from "../../lib/pyodide.ts";
import { PlayIcon } from "lucide-react";

/**
 * The CodeEditor used in the project
 *
 */
const CodeEditor = () => {
	const [value, setValue] = useState(`class Player:
    def __init__(self, coins):
        self.coins = coins

    def add_coins(self, coins):
        self.coins += coins

player = Player(10)

print(player.coins)

player.add_coins(2)

print(player.coins)`);
	const pyodide = Pyodide.getInstance();

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
		<div className="border border-white rounded-4xl px-6 py-15 relative">
			<Editor
				height="50vh"
				language="python"
				theme="vs-dark"
				width="90vh"
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
				className="stroke-secondary fill-secondary absolute top-5 right-10"
				onClick={() => {
					pyodide.run(value);
				}}
			>
				Run
			</PlayIcon>
		</div>
	);
};

export default CodeEditor;
