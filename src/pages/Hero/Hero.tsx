import { useState } from "react";
import {Link} from "react-router-dom"
import "./Hero.css";
import tutorLogo from "../../assets/logo.png";

const Hero = ({ mystyle }: any) => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(!show);
	};
	return (
		<div className="hero">
			<nav className="navbar">
				<div className="brand-title">
					<img src={tutorLogo} alt="logo" width="68px" />
					<h4>
						<span id="logoText">  ILearn </span>
					</h4>
				</div>
				<a href="#" className="toggle-button" onClick={handleClick}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</a>
				{show && (
					<div className="hamburger">
						<a href="#">Tutors</a>
						<a href="#">About Us</a>
						<a href="#"> Login</a>
					</div>
				)}
				<div className="navbar-links">
					<ul>
						<li>
							<a href="#">Tutors</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
						<span className="line"></span>
						<li>
						<Link to="/login" className="login-link">
									Login
								</Link>
						</li>

						<li id="hove">
							{/* <a href="#" className="button">
								Get Started
							</a> */}
							<Link to="/sign-up" className="button">Get Started</Link>
						</li>
					</ul>
				</div>
				<div className="middletext">
					<h1 className="m-text-heading">
						{" "}
						Find the best online <br />
						tutor for you.
					</h1>
					<p id="description">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						<br />
						Quibusdam blanditiis enim voluptatem voluptatibus illo
						<br />
						nostrum illum placeat.
					</p>
					
					<Link to="/sign-up" id="m-button">Get Started</Link>
					
				</div>
			</nav>
		</div>
	);
};

export default Hero;
