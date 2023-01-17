import React, { useEffect, useState } from "react";
import "./FeaturedTutors.css";
import { Link } from "react-router-dom";
import { apiGet } from "../../utils/api/axios";
import Profile from "../profileDetails/profile";
import { Modal } from "react-responsive-modal";
// import Rating from "../dashBoardRating/dashboardRating";
import Rating from "../Rating/Rating";

const FeaturedTutors = () => {
	const [tutors, setTutors] = useState([]);
	const [profile, setProfile] = useState(false);
	// const [rating, setRating] = useState(0);

	const onOpenProfile = () => setProfile(true);
	const onCloseProfile = () => setProfile(false);
	useEffect(() => {
		const fetch = async () => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			try {
				const response = await apiGet(`/users/feature-tutors?page=0&limit=10`);
				setTutors(response.data.tutorSorted);
			} catch (error) {
				console.log(error);
			}
		};
		void fetch();
	}, []);
	return (
		<>
			<div className="all_container">
				<div className="tutors-bar">
					<h4 id="head">Featured Tutors</h4>
					<p>
						<Link to="/all-tutors" className="see-all-tutors">
							See all
						</Link>
					</p>
				</div>
				<div className="tutor-details">
					{tutors.map((el: any) => {
						return (
							<div key={el.id} className="img-name">
								<button type="submit" onClick={onOpenProfile}>
									<div className="images">
										<img src={el.image} alt="" width="68px" height="68px" />
									</div>
									<p className="names">{el.name}</p>
									<div className="cd-rating">
										<Rating rating={Number(el.rating)} image={""} color={""} />
									</div>
								</button>
							</div>
						);
					})}
				</div>
				<Modal open={profile} onClose={onCloseProfile}>
					<Profile />
				</Modal>
			</div>
		</>
	);
};

export default FeaturedTutors;
