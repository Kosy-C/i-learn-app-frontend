import { useState } from "react";
import { Link } from "react-router-dom";
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
					<Link to="/">
						<img src={tutorLogo} alt="logo" />
					</Link>
					<span>iLearn</span>
				</div>
				<a href="#" className="toggle-button" onClick={handleClick}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</a>
				{show && (
					<div className="hamburger">
						<a href="#">Tutors</a>
						<a href="">About Us</a>
						<a href="#"> Login</a>
					</div>
				)}
				<div className="navbar-links">
					<ul>
						<li>
							<Link to="/">Tutors</Link>
						</li>
						<li>
							<Link to="/contact_us">About Us</Link>
							{/* <a href="#">About Us</a> */}
						</li>
						<span className="line"></span>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<div className="buttonCardOne">
							<Link to="/sign-up">
								<a href="/sign-up">Get Started</a>
							</Link>
						</div>
					</ul>
				</div>
			</nav>
			<div className="heroContent">
				<div className="card firstCard">
					<h1>
						Find the best online <br />
						tutor for you.
					</h1>
				</div>
				<div className="heroSecondCard">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					<br />
					Quibusdam blanditiis enim voluptatem voluptatibus illo
					<br />
					nostrum illum placeat.
				</div>

				<div className="buttonCard">
					<Link to="/sign-up">
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Hero;
