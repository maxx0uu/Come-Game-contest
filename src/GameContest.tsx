import { Header, Nav } from "./components";

interface GameContestProps {
	userConnected: any;
	setUserConnected: any;
}

function GameContest({ userConnected, setUserConnected }: GameContestProps) {
	return (
		<>
			<Header />
			<main className="h-screen w-screen top-0 bg-[url('./assets/background.jpg')] bg-center bg-cover pt-20">
				<form>
					<div>
						<p>Question 1 :</p>
						<label>
							Question 1 - Réponse 1 :
							<input type="checkbox" name="q1r1" />
						</label>
						<label>
							Question 1 - Réponse 2 :
							<input type="checkbox" name="q1r2" />
						</label>
						<label>
							Question 1 - Réponse 3 :
							<input type="checkbox" name="q1r3" />
						</label>
					</div>
					<div>
						<p>Question 2 :</p>
						<label>
							Question 2 - Réponse 1 :
							<input type="checkbox" name="q2r1" />
						</label>
						<label>
							Question 2 - Réponse 2 :
							<input type="checkbox" name="q2r2" />
						</label>
						<label>
							Question 2 - Réponse 3 :
							<input type="checkbox" name="q2r3" />
						</label>
					</div>
				</form>
				<Nav
					userConnected={userConnected}
					setUserConnected={setUserConnected}
				/>
			</main>
		</>
	);
}

export default GameContest;
