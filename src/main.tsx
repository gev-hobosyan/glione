import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import i18n from "i18next";
import App from "./App.tsx";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				Welcome: "Welcome Adventurer!! I've been waiting for you",
			},
		},
		am: {
			translation: {
				Welcome: "Բարի գալուստ",
			},
		},
	},
	lng: "am",
	fallbackLng: "en",

	interpolation: {
		escapeValue: false,
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />,
	</StrictMode>,
);
