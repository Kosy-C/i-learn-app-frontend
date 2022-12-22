import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ProfileModal from "../ProfileModal/ProfileModal";

const NavBar = () => {
	const [Mobile, setMobile] = useState(false);
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	const togglePopup = () => {
		setShowModal(!showModal);
	};

	const logout = () => {
		localStorage.clear();
		navigate("/login");
	};
	const getSignature = localStorage.getItem("signature");
	return (
		<nav className="navbarAllPages">
			<div className="logotext">
				<img src="src/assets/images/fulllogo.svg" />
				<h3>iLearn</h3>
			</div>

			<ul
				className={Mobile ? "nav-links-mobile" : "navlinks"}
				onClick={() => setMobile(false)}
			>
				{getSignature === null ? (
					<>
						<Link to={"/tutors"} className="nav-link">
							<li> Tutors</li>
						</Link>

						<Link to={"/about"} className="nav-link">
							<li> About Us</li>
						</Link>

						<Link to={"/login"} className="nav-link">
							<li> Login</li>
						</Link>

						<Link to={"/getstarted"} className="nav-link">
							<li> Get Started</li>
						</Link>
					</>
				) : (
					<>
						<Link to={"/dashboard"} className="nav-link">
							<li> Dashboard</li>
						</Link>

						<Link to={"/reminder"} className="nav-link">
							<li> Reminder</li>
						</Link>

						<Link to={"/notification"} className="nav-link">
							<li> Notification</li>
						</Link>

						<Link to={"/login"} className="nav-link" onClick={logout}>
							<li> Logout</li>
						</Link>
					</>
				)}

				<li>
					<button onClick={togglePopup}>
						{showModal && (
							<ProfileModal userName={""} userEmail={""} userPicture={""} />
						)}
						<img
							src="src/assets/images/profilepic.svg"
							className="profilepic"
						/>
					</button>
				</li>
			</ul>

			<button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
				{Mobile ? <ImCross /> : <FaBars />}
			</button>
		</nav>
	);
};

export default NavBar;
