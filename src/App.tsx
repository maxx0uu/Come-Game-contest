import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import GameContest from "./GameContest";

import "./App.css";
import Home from "./Home";
import AdminPanel from "./AdminPanel";
import { surveyCollection } from "./utils/FirebaseConfig";
import { getDocs } from "firebase/firestore";

function App() {
	const [userConnected, setUserConnected] = useState(null);

	const [surveyList, setSurveyList] = useState<any[]>([]);

	useEffect(() => {
		getSurveys();
	}, []);

	function getSurveys() {
		getDocs(surveyCollection)
			.then((res) => {
				const argos: any = res.docs.map((doc) => ({
					data: doc.data(),
					id: doc.id,
				}));
				setSurveyList(argos);
			})
			.catch((error) => console.log(error.message));
	}

	const [q1r1, setQ1r1] = useState(0);
	const [q1r2, setQ1r2] = useState(0);
	const [q1r3, setQ1r3] = useState(0);
	const [q2r1, setQ2r1] = useState(0);
	const [q2r2, setQ2r2] = useState(0);
	const [q2r3, setQ2r3] = useState(0);
	let temQq1r1 = 0;
	let temQq1r2 = 0;
	let temQq1r3 = 0;
	let temQq2r1 = 0;
	let temQq2r2 = 0;
	let temQq2r3 = 0;

	function refreshData() {
		for (let i = 0; i < surveyList.length; i++) {
			if (surveyList[i].data.questions.question1.response1.resRes === true) {
				temQq1r1 = temQq1r1 + 1;
			}
			if (surveyList[i].data.questions.question1.response2.resRes === true) {
				temQq1r2 = temQq1r2 + 1;
			}
			if (surveyList[i].data.questions.question1.response3.resRes === true) {
				temQq1r3 = temQq1r3 + 1;
			}
			if (surveyList[i].data.questions.question2.response1.resRes === true) {
				temQq2r1 = temQq2r1 + 1;
			}
			if (surveyList[i].data.questions.question2.response2.resRes === true) {
				temQq2r2 = temQq2r2 + 1;
			}
			if (surveyList[i].data.questions.question2.response3.resRes === true) {
				temQq2r3 = temQq2r3 + 1;
			}
		}
		setQ1r1(temQq1r1);
		setQ1r2(temQq1r2);
		setQ1r3(temQq1r3);
		setQ2r1(temQq2r1);
		setQ2r2(temQq2r2);
		setQ2r3(temQq2r3);
	}

	useEffect(() => {
		refreshData();
	});
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							userConnected={userConnected}
							setUserConnected={setUserConnected}
						/>
					}
				></Route>
				<Route
					path="signin"
					element={
						<SignIn
							userConnected={userConnected}
							setUserConnected={setUserConnected}
						/>
					}
				></Route>
				<Route
					path="login"
					element={
						<LogIn
							userConnected={userConnected}
							setUserConnected={setUserConnected}
						/>
					}
				></Route>
				<Route
					path="questions"
					element={
						<GameContest
							userConnected={userConnected}
							setUserConnected={setUserConnected}
							surveyCollection={surveyCollection}
						/>
					}
				></Route>
				<Route
					path="adminpanel"
					element={
						<AdminPanel
							userConnected={userConnected}
							setUserConnected={setUserConnected}
							q1r1={q1r1}
							q1r2={q1r2}
							q1r3={q1r3}
							q2r1={q2r1}
							q2r2={q2r2}
							q2r3={q2r3}
							surveyList={surveyList}
						/>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
