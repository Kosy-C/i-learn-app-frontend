/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { Fragment, ChangeEvent, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../signUp/signUp.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { useAuth } from "../../useContext/index";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../utils/firebaseAuth/firebase";
import axios from "axios";

const baseUrl: string = import.meta.env.VITE_SERVER_URL;

function LoginForm() {
	const navigate = useNavigate();

	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const signInWithGoogle = async (): Promise<void> => {
		await signInWithPopup(firebaseAuth, provider)
			.then((userCred) => {
				console.log(userCred);
				if (userCred !== undefined) {
					firebaseAuth.onAuthStateChanged((userCred) => {
						if (userCred !== undefined) {
							void userCred?.getIdToken().then((token) => {
								axios
									.get(`${baseUrl}/users/googleLogin`, {
										headers: { Authorization: `Bearer ${token}` },
									})
									.then((res) =>
										localStorage.setItem("signature", res.data.signature)
									)
									.then((e) => navigate(`/dashboard`, { replace: true }))
									.catch((e) => e);
								// localStorage.setItem("signature", token);
							});
						} else {
							navigate("/login");
						}
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [error, setError] = useState("");

	const validate = (email: string = "", password: string = "") => {
		if (email.length === 0) return setError("Please Enter your email");
		else if (password.length < 8)
			return setError("Password character cannot be less than 8");
	};
	const { LoginConfig } = useAuth() as any;

	const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		validate(emailRef.current?.value, passwordRef.current?.value);
		const data = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		};
		LoginConfig(data);
	};

	return (
		<Fragment>
			<div className="formContainer">
				<div className="logo">
					<div>
						<img src={logo} alt="Logo" />
					</div>
					<div>
						<h2> iLearn </h2>
					</div>
				</div>
				<div>
					<div className="formBody">
						<div className="formHead">
							<h3>Login </h3>
						</div>

						{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
						<form onSubmit={handleSubmit} className="formInputs">
							{error.length > 0 && error.includes("user") && (
								<div className="errorMsg">{error}</div>
							)}
							<div className="formLabel">
								<label>Email</label>
								<input
									type="email"
									name="email"
									ref={emailRef}
									placeholder="Enter your email"
									required
									className="signUp-input"
								/>
							</div>
							{error.length > 0 && error.includes("email") && (
								<div className="errorMsg">{error}</div>
							)}
							<div className="formLabel">
								<label>Password</label>
								<input
									type="password"
									name="password"
									ref={passwordRef}
									placeholder="Enter your password..."
									required
									className="signUp-input"
								/>
							</div>
							<h5 id="forgot">
								<Link to="/reset-password" className="forgot-link">
									Forgot password?
								</Link>
							</h5>
							{error.length > 0 && error.includes("Password") && (
								<div className="errorMsg">{error}</div>
							)}

							{error.length > 0 && error.includes("Interest") && (
								<div className="errorMsg">{error}</div>
							)}

							<button type="submit" className="signUp-button">
								Login
							</button>
							<div className="login-formAlt">
								Don't have an account?
								<Link to="/sign-up" className="login-link">
									Create
								</Link>
							</div>
						</form>
						{/* <div className="socialIcons"> */}
						{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
						{/* <button type="submit" onClick={googleSignIn}>
								<FcGoogle />
							</button> */}

						{/* <a href="https:localhost:4000/facebook">
								<button className="fbBtn"> */}

						<div className="socialIcons">
							{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
							<button type="submit" onClick={signInWithGoogle}>
								<FcGoogle />
							</button>
							{/* <a href="https:localhost:4000/facebook">
								<button type="submit" className="fbBtn">
									<FaFacebook />
								</button>
							</a> */}
							<a href={`${import.meta.env.VITE_SERVER_URL}/facebook`}>
								<button className="fbBtn">
									<FaFacebook />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default LoginForm;
