import { SignInForm, Nav, Header } from "./components";
import { auth } from "./utils/FirebaseConfig";

interface SignInProps {
	userConnected: any;
	setUserConnected: any;
}

function SignIn({ userConnected, setUserConnected }: SignInProps) {
	return (
		<>
			<Header />
			<main className="h-screen w-screen top-0 bg-[url('./assets/background.jpg')] bg-center bg-cover pt-20">
				<section className="px-8 text-white text-center font-semibold flex flex-col gap-4 py-12 max-w-6xl mx-auto">
					<SignInForm auth={auth} setUserConnected={setUserConnected} />
				</section>
				<button onClick={() => console.log(userConnected)}>
					afficher tout
				</button>
				<Nav
					userConnected={userConnected}
					setUserConnected={setUserConnected}
				/>
			</main>
		</>
	);
}

export default SignIn;
