import "./resetPassword.css";
import * as qs from "query-string";
// import { toast } from "react-toastify";
import Group from "../../assets/Group.svg";
import { Link, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const url = "http://192.168.0.200:4000";

const SetNewPassword = () => {
	const [createForm, setCreateForm] = useState({});

	const queryParams = new URLSearchParams(window.location.search);
	const userId = queryParams.get("userId");
	const token = queryParams.get("token");
	// console.log(token, userId);

	const submitDetails = (e: any) => {
		// console.log(location.search);
		// const parsed = qs.parse(location.search);

		e.preventDefault();
		const { name, value } = e.target;
		console.log({ name, value });
		console.log({ userId, token });
		setCreateForm({
			...createForm,
			[name]: value,
		});
	};
	const fetchLink = async (e: any) => {
		try {
			e.preventDefault();
			console.log("async function");
			const response = await axios.post(
				`http://localhost:4000/users/resetpassword/${userId}/${token}`,
				createForm
			);
			console.log("response is ", response.data);
			window.alert(response.data.message);
			console.log(createForm);
		} catch (error) {
			console.log(error);
			window.alert(error);
		}
	};
	return (
		<div className="overallDiv">
			<div className="resetPassword">
				<div className="tutor-buddy">
					<img src={Group} />
					<h3 className="learn">iLearn</h3>
				</div>
				<div className="form-cont">
					<div className="form-box">
						<div className="contain">
							<h4>Reset Password</h4>
							<p>Please choose a new password</p>
						</div>
						<form>
							<div>
								<label htmlFor="email">New Password</label>
								<br />
								<input
									type="password"
									name="password"
									onChange={submitDetails}
									placeholder="Enter a new password"
								/>
							</div>
							<div>
								<label htmlFor="email">Confirm Password</label>
								<br />
								<input
									type="password"
									name="confirm_password"
									onChange={submitDetails}
									placeholder="Confirm your password"
								/>
							</div>
							<button type="submit" className="btn-primary" onClick={fetchLink}>
								<Link to="/login" className="btn">
									Change Password
								</Link>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SetNewPassword;
