/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue, js, ts}"],
	theme: {
		extend: {
			border: {
				1: "1px solid",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				black: "#212529",
				grey: "#f8f9fa",
				border_grey: "#dee2e6",
				primary: {
					900: "#6E0560",
					800: "#960888",
					700: "#B30BA3",
					600: "#CB10B8",
					500: "#E019D0",
					400: "#ED47ED",
					300: "#F368FC",
					200: "#F48FFF",
					100: "#F8C4FE",
					50: "#FDEBFF",
				},
				secondary: {
					500: "#F9703F",
					400: "#FF9466",
					300: "#FFBO88",
					200: "#FFDOB5",
					100: "#FFE8D9",
				},
				"blue-grey": {
					900: "#102A43",
					800: "#243B53",
					700: "#334E68",
					600: "#486581",
					500: "#627D98",
					400: "#829AB1",
					300: "#9FB3C8",
					200: "#BCCCDC",
					100: "#D9E2EC",
					50: "#FOF4F8",
				},
			},
		},
	},
	plugins: [],
};
