import "./resetPassword.css";
import * as qs from "query-string";
import Group from "../../assets/Group.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_SERVER_URL as string;

const SetNewPassword = () => {
	const [createForm, setCreateForm] = useState({});

	const queryParams = new URLSearchParams(window.location.search);
	const userId = queryParams.get("userId") as string;
	const token = queryParams.get("token") as string;

	const submitDetails = (e: any) => {
		e.preventDefault();
		const { name, value } = e.target;
		setCreateForm({
			...createForm,
			[name]: value,
		});
	};
	const fetchLink = async (e: any) => {
		try {
			e.preventDefault();
			const response = await axios.post(
				`${baseUrl}/users/resetpassword/${userId}/${token}`,
				createForm
			);
			toast.success(response.data.message);
		} catch (error: any) {
			console.log(error);
			toast.error(error);
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
