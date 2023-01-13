/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { Fragment, ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../signUp/signUp.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { signInWithGooglePopup } from "../../utils/firebaseAuth/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiPost } from "../../utils/api/axios";
interface formFieldType {
	userType: string;
	email: string;
	password: string;
	areaOfInterest: string;
}
const formField: formFieldType = {
	userType: "",
	email: "",
	password: "",
	areaOfInterest: "",
};
function SignUpForm() {
	const googleSignIn = async () => {
		await signInWithGooglePopup();
	};
	const handleChange = async (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		event.preventDefault();
		const { name, value } = event.target;
		setFormDetails({ ...formDetails, [name]: value });
	};
	const [show, setShow] = useState(false);
	const display = () => {
		setShow(!show);
	};
	const [formDetails, setFormDetails] = useState(formField);
	const { userType, email, password, areaOfInterest } = formDetails;
	const navigate = useNavigate();
	const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			const response = await apiPost("/users/signup", formDetails);
			toast.success(response.data.message);
			setTimeout(() => {
				// window.location.href = "/login"
				navigate("/login");
			}, 3000);
		} catch (err: any) {
			toast.error(err.response.data.message);
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
								<select
									id="userType"
									name="userType"
									value={userType}
									onChange={handleChange}
								>
									<option value="">Select</option>
									<option value="Tutor">Tutor</option>
									<option value="Student">Student</option>
								</select>
							</div>
							<div className="formLabel">
								<label>Email</label>
								<input
									type="email"
									name="email"
									value={email}
									onChange={handleChange}
									placeholder="Enter your email"
								/>
							</div>
							<div className="formLabel">
								<label>Password</label>
								<input
									type="password"
									name="password"
									value={password}
									onChange={handleChange}
									placeholder="Enter your password..."
								/>
							</div>
							{/* <div className="formLabel">
								<label>Confirm Password</label>
								<input
									type="password"
									name="confirm_password"
									value={confirm_password}
									onChange={handleChange}
									placeholder="Re-enter your password..."
								/>
							</div> */}
							<div className="formLabel">
								<label id="interest">Area of Interest</label>
								<select
									id="interest"
									name="areaOfInterest"
									value={areaOfInterest}
									onChange={handleChange}
								>
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
								<button type="submit" onClick={() => googleSignIn}>
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
export default SignUpForm;
