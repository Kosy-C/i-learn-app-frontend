import React, { Fragment, ChangeEvent, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../signUp/signUp.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { signInWithGooglePopup } from "../../utils/firebaseAuth/firebase";
function SignUpForm() {
	const googleSignIn = async () => {
		await signInWithGooglePopup();
	};
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const interestRef = useRef<HTMLSelectElement>(null);
	const userTypeRef = useRef<HTMLSelectElement>(null);
	const [error, setError] = useState("");
	const validate = (
		email: string = "",
		password: string = "",
		interest: string = "",
		userType: string = ""
	) => {
		if (userType.length === 0) return setError("Please select a user type");
		else if (email.length === 0) return setError("Please Enter your email");
		else if (password.length < 8)
			return setError("Password character cannot be less than 8");
		else if (interest.length === 0)
			return setError("Please Select an area of Interest");
	};
	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		validate(
			emailRef.current?.value,
			passwordRef.current?.value,
			interestRef.current?.value,
			userTypeRef.current?.value
		);
	};
	return (
		<Fragment>
			<div className="formContainer">
				<div className="logo">
					<div>
						<img src={logo} alt="Logo" />
					</div>
					<div>
						<h2>iLearn</h2>
					</div>
				</div>
				<div>
					<div className="formBody">
						<div className="formHead">
							<h2>Create an account </h2>
							<p>Create your account to connect with students</p>
						</div>
						<form onSubmit={handleSubmit} className="formInputs">
							<div>
								<label className="formLabel" id="userType">
									User Type
								</label>
								<select id="userType" name="userType" ref={userTypeRef}>
									<option value="">Select</option>
									<option value="Tutor">Tutor</option>
									<option value="Student">Student</option>
								</select>
							</div>
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
								/>
							</div>
							{error.length > 0 && error.includes("Password") && (
								<div className="errorMsg">{error}</div>
							)}
							<div className="formLabel">
								<label id="interest">Area of Interest</label>
								<select id="interest" name="interest" ref={interestRef}>
									<option value="">Select</option>
									<option value="Tutor">Mathematics</option>
									<option value="physics">Physics</option>
									<option value="coding">Coding</option>
									<option value="graphics">Graphics design</option>
									<option value="video">Video Editing</option>
									<option value="chemistry">Chemistry</option>
									<option value="digital">Digital Marketing</option>
								</select>
							</div>
							{error.length > 0 && error.includes("Interest") && (
								<div className="errorMsg">{error}</div>
							)}
							<button type="submit" className="signUp-button">
								Sign Up
							</button>
							<div className="formAlt">
								Already have an account?
								<Link to="/login" className="login-link">
									Login
								</Link>
							</div>
							<div className="socialIcons">
								<button type="submit" onClick={googleSignIn}>
									<FcGoogle />
								</button>
								<button type="submit">
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
export default SignUpForm;
