// Add a second document with a generated ID.
import { addDoc } from "firebase/firestore";

import { Header, Nav } from "./components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface GameContestProps {
	userConnected: any;
	setUserConnected: any;
	surveyCollection: any;
}

function GameContest({
	userConnected,
	setUserConnected,
	surveyCollection,
}: GameContestProps) {
	const [results, setResults] = useState({
		userId: userConnected.uid,
		questions: {
			question1: {
				response1: { resId: "q1r1", resRes: false },
				response2: { resId: "q1r2", resRes: false },
				response3: { resId: "q1r3", resRes: false },
			},
			question2: {
				response1: { resId: "q2r1", resRes: false },
				response2: { resId: "q2r2", resRes: false },
				response3: { resId: "q2r3", resRes: false },
			},
		},
	});

	const navigate = useNavigate();

	const saveSurvey = async (e: any) => {
		e.preventDefault();
		try {
			addDoc(surveyCollection, results);
		} catch (e) {
			console.log(e);
		}
		setResults({
			userId: userConnected.uid,
			questions: {
				question1: {
					response1: { resId: "q1r1", resRes: false },
					response2: { resId: "q1r2", resRes: false },
					response3: { resId: "q1r3", resRes: false },
				},
				question2: {
					response1: { resId: "q2r1", resRes: false },
					response2: { resId: "q2r2", resRes: false },
					response3: { resId: "q2r3", resRes: false },
				},
			},
		});
		navigate("/");
	};

	function handleResponse(res: any) {
		const tempResult: any = results;
		switch (res.target.name) {
			case "q1r1":
				Object.defineProperty(
					tempResult.questions.question1.response1,
					"resRes",
					{ value: res.target.checked, writable: true }
				);
				setResults(tempResult);
				break;
			case "q1r2":
				Object.defineProperty(
					tempResult.questions.question1.response2,
					"resRes",
					{ value: res.target.checked, writable: true }
				);
				setResults(tempResult);
				break;
			case "q1r3":
				Object.defineProperty(
					tempResult.questions.question1.response3,
					"resRes",
					{ value: res.target.checked, writable: true }
				);
				setResults(tempResult);
				break;
			case "q2r1":
				Object.defineProperty(
					tempResult.questions.question2.response1,
					"resRes",
					{ value: res.target.checked, writable: true }
				);
				setResults(tempResult);
				break;
			case "q2r2":
				Object.defineProperty(
					tempResult.questions.question2.response2,
					"resRes",
					{ value: res.target.checked, writable: true }
				);
				setResults(tempResult);
				break;
			case "q2r3":
				Object.defineProperty(
					tempResult.questions.question2.response3,
					"resRes",
					{ value: res.target.checked, writable: true }
				);
				setResults(tempResult);
				break;
		}
	}

	return (
		<>
			<Header />
			<main className="h-screen w-screen top-0 bg-[url('./assets/background.jpg')] bg-center bg-cover pt-20">
				<section className="px-8 text-white text-center font-semibold flex flex-col gap-4 py-12 max-w-6xl mx-auto">
					<p className="text-4xl font-comforter font-normal py-4">
						Jeu-concours
					</p>
					<form onSubmit={saveSurvey} className="pb-14">
						<div className="py-4">
							<p className="text-2xl pb-4">
								Laquelle ou lesquelles de ces constellations existent ?
							</p>
							<div className="flex flex-col">
								<div>
									<input
										type="checkbox"
										name="q1r1"
										onChange={(e) => handleResponse(e)}
										className="mr-2"
									/>
									<label>Andromède</label>
								</div>
								<div>
									<input
										type="checkbox"
										name="q1r2"
										onChange={(e) => handleResponse(e)}
										className="mr-2"
									/>
									<label>Le Tigre</label>
								</div>
								<div>
									<input
										type="checkbox"
										name="q1r3"
										onChange={(e) => handleResponse(e)}
										className="mr-2"
									/>
									<label>Le Cygne</label>
								</div>
							</div>
						</div>
						<div className="py-4">
							<p className="text-2xl pb-4">
								Laquelle ou lesquelles de ces étoiles existent ?
							</p>
							<div>
								<input
									type="checkbox"
									name="q2r1"
									onChange={(e) => handleResponse(e)}
									className="mr-2"
								/>
								<label>Roséidon</label>
							</div>
							<div>
								<input
									type="checkbox"
									name="q2r2"
									onChange={(e) => handleResponse(e)}
									className="mr-2"
								/>
								<label>Appollon</label>
								<div></div>
								<input
									type="checkbox"
									name="q2r3"
									onChange={(e) => handleResponse(e)}
									className="mr-2"
								/>
								<label>Alhéna</label>
							</div>
						</div>
						<button
							type="submit"
							className="text-2xl font-light bg-nightblue rounded-2xl px-8 py-4 font-comforter"
						>
							Envoyer les réponses
						</button>
					</form>
				</section>
				<Nav
					userConnected={userConnected}
					setUserConnected={setUserConnected}
				/>
			</main>
		</>
	);
}

export default GameContest;
