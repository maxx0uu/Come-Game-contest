import { signInWithEmailAndPassword } from "firebase/auth";

export const SignInForm = (props: any) => {
	const handleSignIn = (e: any) => {
		e.preventDefault();
		signInWithEmailAndPassword(
			props.auth,
			e.target.elements.mail.value,
			e.target.elements.password.value
		)
			.then((userCredential) => {
				// Signed in
				const currentUser = userCredential.user;
				props.setUserConnected(currentUser);

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	return (
		<>
			<div>
				<p className="text-4xl font-comforter font-normal py-4">
					Se connecter à un compte
				</p>
				<form
					onSubmit={(e) => handleSignIn(e)}
					className="py-4 flex flex-col items-start gap-4"
				>
					<p className="font-normal text-xl">Votre adresse mail :</p>
					<input type="email" name="mail" className="w-full text-2xl" />
					<p className="font-normal text-xl">Votre mot de passe</p>
					<input type="password" name="password" className="w-full text-2xl" />
					<button
						type="submit"
						className="text-2xl font-light bg-nightblue rounded-2xl px-8 py-4"
					>
						Se connecter
					</button>
				</form>
			</div>
		</>
	);
};
