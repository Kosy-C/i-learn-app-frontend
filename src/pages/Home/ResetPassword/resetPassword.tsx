import "./resetPassword.css";
import React from "react";
import Group from "../../../assets/Group.svg";
const ResetPassword = () => {
	return (
		<div className="overallDiv">
			<div className="resetPassword">
				<div className="tutor-buddy">
					<img src={Group} />
					<h3 className="learn">ILearn</h3>
				</div>
				<div className="form-con">
					<div className="form-box">
						<div className="contain">
							<h4>Forgot Password?</h4>
							<p>Send a link to your email to resend password</p>
						</div>
						<form>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<br />
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Enter email"
								/>
							</div>
							<button type="submit" className="btn-primary">
								Send Reset Link
							</button>
							<p>
								Already have an account?{" "}
								<span className="login">
									<a href="/login">Login</a>
								</span>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
