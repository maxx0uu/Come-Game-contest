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
			<div className="h-full flex justify-between items-center max-w-6xl mx-auto px-8">
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
						{userConnected.uid === "Ldk6C3XuHicKbOxokQ1q3LmQ6mp1" ? (
							<Link to="/adminpanel" className="flex flex-col items-center">
								<img
									src={require("../assets/Admin.png")}
									alt="Déconnexion du compte"
								/>
								<p>Accès admin</p>
							</Link>
						) : null}
						<Link
							to="/"
							className="flex flex-col items-center"
							onClick={() => setUserConnected(null)}
						>
							<img
								src={require("../assets/Disconnect.png")}
								alt="Déconnexion du compte"
							/>
							<p>Se déconnecter</p>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};
