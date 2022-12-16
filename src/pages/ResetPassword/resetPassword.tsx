import "./resetPassword.css";
import React from "react";
import Group from "../../assets/Group.svg";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ResetPassword = () => {
	return (
		<div className="overallDiv">
			<div className="resetPassword">
				<div className="tutor-buddy">
					<img src={Group} />
					<h3 className="learn">iLearn</h3>
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
								<Link to="/set-new-password" className="btn">
									Send Reset Link
								</Link>
							</button>
							<p>
								Already have an account?{" "}
								<span className="login">
									<Link to="/login">Login</Link>{" "}
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
