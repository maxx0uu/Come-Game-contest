import { useEffect, useState } from "react";
import { Nav, Header, Chart } from "./components";

interface AdminPanelProps {
	userConnected: any;
	setUserConnected: any;
	q1r1: any;
	q1r2: any;
	q1r3: any;
	q2r1: any;
	q2r2: any;
	q2r3: any;
	surveyList: any;
}

function AdminPanel({
	userConnected,
	setUserConnected,
	q1r1,
	q1r2,
	q1r3,
	q2r1,
	q2r2,
	q2r3,
	surveyList,
}: AdminPanelProps) {
	const [winnerArray, setWinnerArray] = useState<any[]>([]);

	const filteredWinner: any = surveyList.filter(
		(survey: any) =>
			survey.data.questions.question1.response1.resRes === true &&
			survey.data.questions.question1.response2.resRes === false &&
			survey.data.questions.question1.response3.resRes === true &&
			survey.data.questions.question2.response1.resRes === false &&
			survey.data.questions.question2.response2.resRes === false &&
			survey.data.questions.question2.response3.resRes === true
	);

	function pickWinner() {
		if (filteredWinner.length < 5) {
			filteredWinner.map((winner: any) => {
				const tempArray = winnerArray.push(winner);
				setWinnerArray(winnerArray);
				console.log(winnerArray);
			});
		} else {
			console.log("Tirage des gagnants en cours");
			let i = 0;
			// console.log(filteredWinner[randomIndex]);
			while (i < 5) {
				const randomIndex = Math.floor(
					Math.random() * (filteredWinner.length - 1 + 1)
				);
				const currentWinner = filteredWinner[randomIndex];
				if (
					winnerArray.find(
						(winner) => winner.data.userId === currentWinner.data.userId
					)
				) {
					setWinnerArray(winnerArray);
				} else {
					const tempArray = winnerArray.push(currentWinner);
					setWinnerArray(winnerArray);
					i++;
				}
			}
		}
		return winnerArray;
	}

	useEffect(() => {}, [winnerArray]);

	return (
		<>
			<Header />
			<main className="h-screen w-screen top-0 bg-[url('./assets/background.jpg')] bg-center bg-cover bg-fixed pt-20">
				<section className="px-8 text-white text-center font-semibold flex flex-col gap-4 py-12 max-w-6xl mx-auto pb-32">
					<Chart
						surveyList={surveyList.length}
						q1r1={Math.round((226 * q1r1) / surveyList.length)}
						q1r2={Math.round((226 * q1r2) / surveyList.length)}
						q1r3={Math.round((226 * q1r3) / surveyList.length)}
						q2r1={Math.round((226 * q2r1) / surveyList.length)}
						q2r2={Math.round((226 * q2r2) / surveyList.length)}
						q2r3={Math.round((226 * q2r3) / surveyList.length)}
					/>
					<button
						onClick={() => pickWinner()}
						className="text-2xl font-light bg-nightblue rounded-2xl px-8 py-4 font-comforter"
					>
						Take a winner
					</button>
					<button onClick={() => console.log(winnerArray)}>Log winners</button>
					<ul>
						{winnerArray.map((winner) => {
							return <li key={winner.id}>{winner.data.userId}</li>;
						})}
					</ul>
				</section>

				<Nav
					userConnected={userConnected}
					setUserConnected={setUserConnected}
				/>
			</main>
		</>
	);
}

export default AdminPanel;
