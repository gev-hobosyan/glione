import { loadPyodide } from "pyodide";

export var Pyodide = (function () {
	var instance: PythonRunner;
	function createInstance() {
		var object = new PythonRunner();
		return object;
	}
	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

class PythonRunner {
	_output: any;
	_pyodide: any;

	constructor() {
		this._output = console.log;
		this._pyodide = null;
		loadPyodide({
			indexURL: "https://cdn.jsdelivr.net/pyodide/v0.29.3/full",
			stderr: (text) => {
				this._output(text);
			},
			stdout: (text) => {
				this._output(text);
			},
		}).then((result) => {
			this._pyodide = result;

			console.log(
				this._pyodide.runPython(`
            import sys
            sys.version
        `),
			);

			this._pyodide.runPython('print("Hello from Python!")');
		});
	}
	setOutput(output: any) {
		this._output = output;
	}
	run(code: string) {
		if (this._pyodide) {
			return this._pyodide.runPython(code);
		}
	}
}
