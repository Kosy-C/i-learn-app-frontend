import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="divider"></div>
			<div>
				<h4 className="reserved">© 2022 TutorBuddy. All rights reserved</h4>
				<a href="#">
					<img
						src="ilearning/src/components/assets/youtube.png"
						alt="youtube-icon"
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;
