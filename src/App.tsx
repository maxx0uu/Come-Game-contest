import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import GameContest from "./GameContest";

import "./App.css";
import Home from "./Home";

function App() {
	const [userConnected, setUserConnected] = useState(null);
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
						/>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
