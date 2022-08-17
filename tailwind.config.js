/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			comforter: ["comforter"],
		},
		extend: {
			backgroundImage: {
				"background-image": "url('./src/assets/background.jpg",
			},
			colors: {
				nightblue: "#1483A2",
			},
		},
	},
	plugins: [],
};
