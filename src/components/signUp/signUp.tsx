/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { Fragment, ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../signUp/signUp.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { signInWithGooglePopup } from "../../utils/firebaseAuth/firebase";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiPost } from "../../utils/api/axios";

const baseUrl = import.meta.env.SERVER_URL;

interface formFieldType {
	userType: string;
	email: string;
	password: string;
	areaOfInterest: string;
	name: string;
}
const formField: formFieldType = {
	name: "",
	userType: "",
	email: "",
	password: "",
	areaOfInterest: "",
};

function SignUpForm() {
	const [formError, setFormError] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [show, setShow] = useState(false);
	const [formDetails, setFormDetails] = useState(formField);
	const navigate = useNavigate();

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

	const display = () => {
		setShow(!show);
	};

	const { name, userType, email, password, areaOfInterest } = formDetails;
	useEffect(() => {
		if (Object.keys(formError).length === 0 && isSubmit) {
			console.log(formDetails);
		}
	}, [formError]);

	const validate = (values: formFieldType) => {
		const errors: formFieldType = {
			name: "",
			userType: "",
			email: "",
			password: "",
			areaOfInterest: "",
		};
		if (!values.name) {
			errors.name = "Name is required";
		}
		if (!values.userType) {
			errors.userType = "User Type is required";
		}
		if (!values.email) {
			errors.email = "Email is required";
		}
		if (!values.password) {
			errors.password = "Password is required";
		}
		if (!values.areaOfInterest) {
			errors.areaOfInterest = "Area of Interest is required";
		}
		return errors;
	};

	const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			const response = await apiPost(`/users/signup`, formDetails);

			if (response.status === 201) {
				toast.success(response.data.message);
			}

			setFormError(validate(formDetails));
			setIsSubmit(true);
		} catch (err: any) {
			toast.error(err.response.data.Error);
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
							<div className="formLabel">
								<label>Full Name</label>
								<input
									type="text"
									name="name"
									value={name}
									onChange={handleChange}
									placeholder="Enter your name"
								/>
							</div>
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
