import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";
// import star from "../../assets/star.png";
import axios from "axios";
// import coloredStar from "../../assets/colored-star.png";
import "./AllTutor.css";

const jsonUrl = "http://localhost:8000/tutors";
const AllTutor = () => {
	const [show, setShow] = useState(false);
	const [tutors, setTutor] = useState([]);
	const getTutor = async () => {
		try {
			const response = await axios.get(jsonUrl);
			console.log(response.data);
			setTutor(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getTutor();
	}, []);
	return (
		<div className="all_tutors_container">
			<div className="temp_navbar">
				<div className="temp_navbar_background_div"></div>
			</div>
			{/* <NavBar /> */}
			<div className="all_tutors_text_and_search_container">
				<h1 className="all_tutor_heading">All Tutors</h1>
				<input
					className="all_courses_search"
					type="text"
					placeholder="Search"
				/>
			</div>
			<div className="our_tutors_and_all_tutor_card_container">
				<div className="our_tutors">Our Tutors</div>
				<div className="all_tutor_card_container">
					{tutors.map((tutor: any, index: number) => {
						return (
							<div key={index} className="tutor_card">
								<div className="tutor_avatar_container">
									<img className="tutor_avatar" src={tutor.avatar} alt="" />
								</div>
								<div className="tutor_details">
									<p className="tutor_name">{tutor.name}</p>
									<button className="see_tutor_courses_button">
										See courses
									</button>
									<div className="tutor_rating_container">
										<div className="rating_text_container">
											<span>{tutor.rating}</span>
										</div>

										<div className="tutor_rating_stars_container">
											<div className="tutor_rating_star1"></div>
											<div className="tutor_rating_star2"></div>
											<div className="tutor_rating_star3"></div>
											<div className="tutor_rating_star4"></div>
											<div className="tutor_rating_star5"></div>
										</div>
									</div>
								</div>

								{show &&
									tutor.courses.map((c: any, index: number) => (
										<div className="all_courses_details">
											<div key={c.course_id} className="all_courses_img">
												<img src={c.cover_image} alt="course_logo" />
											</div>
											<h3>{c.title}</h3>

											<h3>
												{c.rating}
												{/* <span><img src={coloredStar}/></span> */}
												{/* <span><img src={star}/></span> */}
												<span>({index})</span>
											</h3>
										</div>
									))}
							</div>
						);
					})}
				</div>
				<div className="see_more">See more &#8964;</div>
			</div>{" "}
			{/* </div> */}
		</div>
	);
};
export default AllTutor;
