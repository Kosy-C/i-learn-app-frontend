/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { Fragment, ChangeEvent, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../signUp/signUp.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { signInWithGooglePopup } from "../../utils/firebaseAuth/firebase";
import axios from "axios";
import { toast } from "react-toastify";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
import.meta.env;

const baseUrl: string = import.meta.env.VITE_SERVER_URL;

function LoginForm() {
	const googleSignIn = async () => {
		await signInWithGooglePopup();
	};

	const navigate = useNavigate();

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [error, setError] = useState("");

	const validate = (email: string = "", password: string = "") => {
		if (email.length === 0) return setError("Please Enter your email");
		else if (password.length < 8)
			return setError("Password character cannot be less than 8");
	};

	const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		validate(emailRef.current?.value, passwordRef.current?.value);
		// const { name, value } = event.target
		console.log(emailRef.current?.value);
		const data = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		};
		console.log(data);

		try {
			const response = await axios.post(`${baseUrl}/users/login`, data);
			const signature = response.data.signature;
			console.log(response.data, "response is");
			localStorage.setItem("signature", signature);
			localStorage.setItem("user", response.data.areaOfInterest || "backend");
			navigate("/dashboard");
		} catch (err: any) {
			console.log(err.response.data, "error message");
			toast.error(err.response?.data?.Error || "Something went wrong");
		}
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
						<div className="socialIcons">
							{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
							<button type="submit" onClick={googleSignIn}>
								<FcGoogle />
							</button>

							<a href="https:localhost:4000/facebook">
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
