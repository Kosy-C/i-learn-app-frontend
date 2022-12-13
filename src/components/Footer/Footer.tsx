import React from "react";
import "./Footer.css";
import youtubeLogo from "../../assets/youtube.png";
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
import footerLogo from "../../assets/footerImage.png";

const Footer = () => {
	return (
		<div className="footer">
			{/* <h2>
				<span>
					<img src={footerLogo} alt="footerImage" />
				</span>
				<span id="logoText">ILEARNING </span>
			</h2> */}
			<div className="divider"></div>
            
			<div>
				<h4 id="reserved">© 2022 TutorBuddy. All rights reserved</h4>
				<div id="footerHolder">
					<div className="socialImage">
						<a href="#">
							<img
								src={instagramLogo}
								alt="instagram-icon"
								id="socialIcons"
								width="25px"
							/>
						</a>
					</div>
					<div className="socialImage">
						<a href="#">
							<img
								src={twitterLogo}
								alt="twitter-icon"
								id="socialIcons"
								width="25px"
							/>
						</a>
					</div>
					<div className="socialImage">
						<a href="#">
							<img
								src={youtubeLogo}
								alt="youtube-icon"
								id="socialIcons"
								width="25px"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
