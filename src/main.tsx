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
				Title: "Learn Python",
				Title1: "Games with Python",
				Title2: "Programming with Python",
				Title3: "Interesting lessons",
				Description: "Learn Python with us the fun way",
				Description1: "Create games with Python",
				Description2: "Create apps using Python",
				Description3: "Learning Python in interesting way",
				Module: "Module",
				ButtonText: "View details",
				AboutTitle: "Venture into the depths. Conquer the code. Master Python.",
				AboutDesc: "Glione is an interactive Python and Computer Science learning platform where every lesson is a dungeon, every challange is a monster.",
				AboutQuestion: "What is Glione?",
				AboutDesc1: "Glione turns learning Python into an adventure. Instead of dry tutorials you explore dungoens, slaying monsters. Solve coding challenges to defeat enemies, collect loot, and level up your character as your real-world skills grow.",
				NavbarHome: "Home",
				NavbarAbout: "About",
				NavbarCourses: "Courses",
				NavbarPricing: "Pricing",
				GetStarted: "Get Started",
				Signin: "Sign in",
				FooterPrivacy: "Privacy Policy",

			},
		},
		am: {
			translation: {
				Welcome: "Բարի գալուստ",
				Title: "Սովորիր Python",
				Title1: "Python Խաղեր",
				Title2: "Ծրագրավորում Python-ով",
				Title3: "Հետաքրքիր դասեր",
				Description: "Սովորիր մեզ հետ Python զվարճալի ձևով",
				Description1: "Ստեղծիր խաղեր օգտագործելով Python",
				Description2: "Ստեղծիր ծրագրեր օգտագործելով Python",
				Description3: "Սովորիր Python հետաքրքիր ձևով",
				Module: "Մոդուլ",
				ButtonText: "Տեսնել ավելին",
				AboutTitle: "Սուզվիր խորքերը։ Հաղթահարիր կոդը։ Տիրապետիր Python-ին։",
				AboutDesc: "Glione-ը ինտերակտիվ Python-ի և համակարգչային գիտության ուսուցման հարթակ է, որտեղ ամեն դաս մի զնդան է, իսկ ամեն մարտահրավեր՝ հրեշ, որը պետք է հաղթահարես։",
				AboutQuestion: "Ինչ է Glione-ը",
				AboutDesc1: "Glione-ը Python սովորելը վերածում է արկածի։ Չոր ու ձանձրալի ձեռնարկների փոխարեն դու ուսումնասիրում ես զնդաններ և կռվում հրեշների դեմ։ Լուծիր ծրագրավորման խնդիրներ՝ թշնամիներին հաղթելու համար, հավաքիր ավար և զարգացրու քո կերպարը, մինչ քո իրական հմտություններն էլ աճում են։",
				NavbarHome: "Գլխավոր էջ",
				NavbarAbout: "Մեր մասին",
				NavbarCourses: "Դասընթացներ",
				NavbarPricing: "Արժեքներ",
				GetStarted: "Սկսի՛ր",
				Signin: "Մուտք գործել",
				FooterPrivacy: "Գաղտնիության քաղաքականություն",
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
