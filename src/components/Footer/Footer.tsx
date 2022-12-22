import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/footerImage.png";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
	return (
		<div className="footer">
			<div className="divider"></div>
			<div id="footerGroup">
				<h4>
					<span>
						<img src={footerLogo} alt="footerImage" width="19em" />
					</span>
					<span id="footerText">iLearn </span>
				</h4>
			</div>

			<div>
				<h4 id="reserved">© 2022 iLearn. All rights reserved</h4>
				<SocialMedia />
			</div>
		</div>
	);
};

export default Footer;
