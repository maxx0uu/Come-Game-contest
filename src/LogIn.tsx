import { Header, LogInForm, Nav } from "./components";
import { auth } from "./utils/FirebaseConfig";

interface LogInProps {
	userConnected: any;
	setUserConnected: any;
}

function LogIn({ userConnected, setUserConnected }: LogInProps) {
	return (
		<>
			<Header />
			<main className="h-screen w-screen top-0 bg-[url('./assets/background.jpg')] bg-center bg-cover pt-20">
				<section className="px-8 text-white text-center font-semibold flex flex-col gap-4 py-12 max-w-6xl mx-auto">
					<LogInForm auth={auth} />
				</section>
				<Nav
					userConnected={userConnected}
					setUserConnected={setUserConnected}
				/>
			</main>
		</>
	);
}

export default LogIn;
