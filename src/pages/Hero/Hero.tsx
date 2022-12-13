import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(!show);
	};
	return (
		<div className="hero">
			<nav className="navbar">
				<div className="brand-title">
					<h1> ILEARNING</h1>
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
							<a href="#"> Login</a>
						</li>

						<button type="button">Get Started</button>
					</ul>
				</div>
				<div className="middletext">
					<h1 className="m-text-heading">
						{" "}
						Find the best online <br />
						tutor for you.
					</h1>
					<p className="description">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam{" "}
						<br />
						blanditiis enim voluptatem voluptatibus illo nostrum illum placeat.
					</p>
					<button type="button" className="m-button">
						Get Started
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Hero;
