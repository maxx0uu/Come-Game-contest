import { Link } from "react-router-dom";

export const PopUp = () => {
	return (
		<div className="absolute w-screen bg-white h-96 bottom-0 z-10 rounded-t-2xl flex flex-col justify-around items-center py-8">
			<img
				src={require("../assets/earth.png")}
				alt="Planet logo"
				className="w-24"
			/>
			<p className="font-semibold text-2xl text-center">
				Merci d'avoir participé à ce concours
			</p>
			<Link
				to="/"
				className="text-2xl font-light bg-nightblue rounded-2xl px-8 py-4 text-white"
			>
				Retour à l'accueil
			</Link>
		</div>
	);
};
