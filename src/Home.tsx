import { Link } from "react-router-dom";

import { Header, Nav } from "./components";

interface HomeProps {
	userConnected: any;
	setUserConnected: any;
}

function Home({ userConnected, setUserConnected }: HomeProps) {
	return (
		<>
			<Header />
			<main className="h-screen w-screen top-0 bg-[url('./assets/background.jpg')] bg-center bg-cover bg-fixed pt-20">
				<section className="px-8 text-white text-center font-semibold flex flex-col gap-4 py-12 max-w-6xl mx-auto">
					<p className="text-2xl">
						À l’occasion de l’ouverture de la nouvelle boutique.
					</p>
					<p className="text-3xl">
						Grand jeu-concours avec de nombreux lots à gagner !
					</p>
					{userConnected ? (
						<Link
							to="/questions"
							className="font-comforter text-5xl font-normal bg-nightblue rounded-2xl py-4 mt-8"
						>
							Participer
						</Link>
					) : (
						<div className="flex justify-center gap-8">
							<Link
								to="/signin"
								className="flex flex-col items-center bg-nightblue rounded-2xl p-4"
							>
								<img src={require("./assets/Signin.png")} alt="Connexion" />
								<p>Se connecter</p>
							</Link>
							<Link
								to="/login"
								className="flex flex-col items-center bg-nightblue rounded-2xl p-4"
							>
								<img
									src={require("./assets/Login.png")}
									alt="Création de compte"
								/>
								<p>Créer un compte</p>
							</Link>
						</div>
					)}
				</section>
				<Nav
					userConnected={userConnected}
					setUserConnected={setUserConnected}
				/>
			</main>
		</>
	);
}

export default Home;
