import "./resetPassword.css";
// import { toast } from "react-toastify";
import Group from "../../assets/Group.svg";
import { Link } from "react-router-dom";
import React from "react";

const SetNewPassword = () => {
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
							<div className="form-group">
								<label htmlFor="email">New Password</label>
								<br />
								<input
									type="password"
									className="form-control"
									id="new-password"
									placeholder="Enter a new password"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Confirm Password</label>
								<br />
								<input
									type="password"
									className="form-control"
									id="confirm-password"
									placeholder="Confirm your password"
								/>
							</div>
							<button type="submit" className="btn-primary">
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
