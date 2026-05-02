import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	server: {
		watch: {
			usePolling: true,
		},
	},
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	define: {
		VITE_API_URL: process.env.VITE_API_URL,
		VITE_SUPABASE_URL: process.env.VITE_SUPABASE_URL,
		VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY:
			process.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
		VITE_PUBLIC_SITE_URL: process.env.VITE_PUBLIC_SITE_URL,
	},
});
