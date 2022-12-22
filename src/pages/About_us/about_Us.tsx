import { useState } from "react";
import { Link } from "react-router-dom";
import "./about_Us.css";
import tutorLogo from "../../assets/logo.png";
const About = ({ mystyle }: any) => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(!show);
	};
	return (
		<div className="hero">
			<nav className="navbar">
				<div className="brand-title">
					<Link to="/#">
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
						<a href="#">About Us</a>
						<a href="#"> Login</a>
					</div>
				)}
				<div className="navbar-links">
					<ul>
						<li>
							<Link to="/Tutors">Tutors</Link>
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
					<h1>OUR TEAM</h1>
				</div>

				<div>
					<p>
						We are made up of <span id="num">18</span> team members by names:{" "}
					</p>
					<p id="us">
						Samuel Adigun, <span id="naming">Ifiok Inyang, </span> Charles
						Chijuka, <br/> Chiemeka Elumeziem,
						<span id="naming">Kosisochukwu Chinweuba, <br/></span> Zinat Sanni,
						Olaitan Olanrewaju, <span id="naming">Victor Olufade</span>
						<br />
						Oluwatobiloba Akinrimisi, Mercy Ogbenjuwa, Theresa Oyim,<br />{" "}
						<span id="naming">Oluwaseyi Makinde</span>,
					
						Samuel Ajalode, Kingsley Ogbonnaya, <br />Mustapha Muhammed,
						<span id="naming">Daniel Iwegbue</span> Abdullahi Aliyu
					</p>
				</div>
			</div>
		</div>
	);
};
export default About;
