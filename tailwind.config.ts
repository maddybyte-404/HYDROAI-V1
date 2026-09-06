import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { forest: "#071A14", hydro: "#19C37D", aqua: "#22D3EE", electric: "#3B82F6", violet: "#8B5CF6", cloud: "#F5F8F6" } } },
  plugins: []
} satisfies Config;
