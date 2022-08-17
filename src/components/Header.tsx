import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<Link to="/">
			<header className="absolute w-screen flex justify-center py-4">
				<img src={require("../assets/Logo.png")} alt="Logo Planet" />
			</header>
		</Link>
	);
};
