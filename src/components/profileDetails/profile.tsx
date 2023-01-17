import React, { useEffect, useState } from "react";
import "../profileDetails/profile.css";
import Ellipse4 from "../../assets/images/Ellipse 4.svg";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { apiGet } from "../../utils/api/axios";
import TutorAvailability from "../Availability/ShowAvailabilty";
import { Modal } from "react-responsive-modal";

const Profile = () => {
	const [tutor, setTutor] = useState<any>({});
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
	const params = useParams();
	useEffect(() => {
		const fetch = async () => {
			const { data } = await apiGet(`/users/atutordetail/${params.id}`);
			console.log(data);
			setTutor(data.message);
		};
		fetch();
	}, []);
	return (
		<>
			<body className="profile-body">
				<div className="profile-container">
					<div className="profile-head">
						<h2>Tutor Profile</h2>
						<h2>
							<button type="submit"></button>
						</h2>
					</div>
					<hr />
					<div className="profile-tutor">
						<img src={tutor.image} alt="avatar" />
						<div className="profile-tutor-details">
							<h2>{tutor.name}</h2>
							<p>
								{" "}
								<AiOutlineSafetyCertificate className="certify-icon" />{" "}
								Certified Tutor
							</p>
							<p>
								{" "}
								<CiLocationOn /> {tutor.email}
							</p>
						</div>
					</div>
					<div className="profile-about">
						<h3>About</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
							quia id eum doloribus, unde aliquam. Magni, ratione. Magni vero
							animi id atque assumenda laudantium deserunt quam quisquam nam.
							Nostrum, culpa?
						</p>
					</div>
					<div className="profile-expertise">
						<h3>Expertise</h3>
						<div>
							<ul className="profile-expertise-list">
								<li>{tutor.areaOfInterest}</li>
							</ul>
						</div>
					</div>
					<div className="availabilityButton">
						<button type="submit" onClick={openModal}>
							Availability
						</button>
						<Modal open={modalIsOpen} onClose={closeModal}>
							<TutorAvailability />
						</Modal>
					</div>
				</div>
			</body>
		</>
	);
};
export default Profile;
