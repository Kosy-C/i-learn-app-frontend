/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, {
	Fragment,
	ChangeEvent,
	useState,
	useRef,
	useEffect,
} from "react";
import { Link } from "react-router-dom";
import "../signUp/signUp.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { signInWithGooglePopup } from "../../utils/firebaseAuth/firebase";
import { useAuth } from "../../useContext/index";
import LoadingIcons from "react-loading-icons";

function LoginForm() {
	const googleSignIn = async () => {
		await signInWithGooglePopup();
	};
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [error, setError] = useState("");

	const validate = (email: string = "", password: string = "") => {
		if (email.length === 0) return setError("Please Enter your email");
		else if (password.length < 8)
			return setError("Password character cannot be less than 8");
	};
	const { LoginConfig, loading, setLoading } = useAuth() as any;

	const handleLogin = () => {
		setLoading(true);
	};
	const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();

		validate(emailRef.current?.value, passwordRef.current?.value);
		const data = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		};
		LoginConfig(data);
	};
	useEffect(() => {
		setLoading(false);
	}, []);

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
							{/* //true */}

							<button
								type="submit"
								className="signUp-button"
								onClick={handleLogin}
							>
								Login
							</button>

							{/* false */}
							{loading && (
								<div className="login_loading">
									<LoadingIcons.Oval
										stroke="black"
										strokeOpacity={1}
										height={45}
										width={398}
									/>
								</div>
							)}
							<div className="login-formAlt">
								Don't have an account?
								<Link to="/sign-up" className="login-link">
									Create
								</Link>
							</div>
							<div className="socialIcons">
								{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
								<button type="submit" onClick={googleSignIn}>
									<FcGoogle />
								</button>
								<button type="submit" className="fbBtn">
									<FaFacebook />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default LoginForm;
