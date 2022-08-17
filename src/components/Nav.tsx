import { Link } from "react-router-dom";

interface NavProps {
	userConnected: any;
	setUserConnected: any;
}

export const Nav = ({ userConnected, setUserConnected }: NavProps) => {
	return (
		<nav
			className={
				userConnected == null
					? "fixed w-screen bottom-0 h-24 bg-nightblue rounded-t-2xl text-white text-center"
					: "fixed w-screen bottom-0 h-24 bg-nightblue rounded-t-2xl text-white text-center"
			}
		>
			<div
				className={
					userConnected == null
						? "h-full flex justify-between items-center max-w-6xl mx-auto px-8"
						: "h-full flex justify-end items-center max-w-6xl mx-auto px-8"
				}
			>
				{userConnected == null ? (
					<>
						<Link to="/signin" className="flex flex-col items-center">
							<img src={require("../assets/Signin.png")} alt="Connexion" />
							<p>Se connecter</p>
						</Link>
						<Link to="/login" className="flex flex-col items-center">
							<img
								src={require("../assets/Login.png")}
								alt="Création de compte"
							/>
							<p>Créer un compte</p>
						</Link>
					</>
				) : (
					<>
						<Link
							to="/"
							className="flex flex-col items-center"
							onClick={() => setUserConnected(null)}
						>
							<img
								src={require("../assets/Disconnect.png")}
								alt="Déconnexion du compte"
							/>
							<p>Créer un compte</p>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};
