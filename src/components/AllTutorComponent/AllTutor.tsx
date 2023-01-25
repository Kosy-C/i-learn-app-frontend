import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import star from "../../assets/star.png";
import axios from "axios";
import coloredStar from "../../assets/colored-star.png";
import "./AllTutor.css";
import Modal from "../TutorAllCourses/tutorAllCoursesModal";
import { title } from "process";
import { apiGet } from "../../utils/api/axios";

const AllTutor = () => {
	const [readMore, setReadMore] = useState(6);
	const [openModal, setOpenModal] = useState(false);
	const [show, setShow] = useState(false);
	const [tutors, setTutor] = useState([]);
	const [oneTutor, setOneTutor] = useState({});
	const getAllTutor = async () => {
		try {
			const response = await apiGet("/users/all-tutors");
			console.log(response.data.findTutor);
			setTutor(response.data.findTutor);
		} catch (error) {
			console.log(error);
		}
	};
	const getTutor = async (id: number) => {
		try {
			// const response = await axios.get('');
			const response = await apiGet(`/users/tutors/${id}/course`);
			console.log("response data is ", response.data);
			setOneTutor({
				avatar:
					"https://media.istockphoto.com/id/517322295/photo/businessman-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=nblmvXxR-4huR6u9psWI8JGDQKw6ezlXX-p3wWtouSE=",
				name: "blessing",
				id: 1,
				courses: [
					{
						course_id: 109,
						title: "English for Beginners",
						cover_image: "",
						rating: 3.0,
					},
					{
						course_id: 132,
						title: "Intermediate Arabic",
						cover_image: "",
						rating: 4.0,
					},
					{
						course_id: 189,
						title: "Wood work for Junior Secondary School",
						cover_image: "",
						rating: 4.6,
					},
					{
						course_id: 409,
						title: "Carpentry for Senior Secondary School",
						cover_image: "",
						rating: 4.6,
					},
				],
				rating: 3.0,
			});
			setOpenModal(true);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getAllTutor();
	}, []);
	const showMore = () => {
		setShow((previousState) => !previousState);
	};

	const showMoreBtn = () => {
		setReadMore(readMore + 3);
	};

	return (
		<>
			<NavBar />
			<div className="unique_all_tutors_container">
				<div className="unique_all_tutors_text_and_search_container">
					<h1 className="unique_all_tutor_heading">All Tutors</h1>
					<input
						className="unique_all_courses_search"
						type="text"
						placeholder="Search"
					/>
				</div>
			</div>

			<div className="kings">
				<div className="unique_our_tutors_and_all_tutor_card_container">
					<div className="unique_our_tutors">Our Tutors</div>
					<div className="unique_all_tutor_card_container">
						{tutors.slice(0, readMore).map((tutor: any, index: number) => {
							return (
								<div key={index} className="unique_tutor_card">
									<div className="unique_tutor_avatar_container">
										<img
											className="unique_tutor_avatar"
											src={
												tutor.image != ""
													? tutor.image
													: "https://media.istockphoto.com/id/517322295/photo/businessman-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=nblmvXxR-4huR6u9psWI8JGDQKw6ezlXX-p3wWtouSE="
											}
											alt=""
										/>
									</div>
									<div className="unique_tutor_details">
										<p className="unique_tutor_name">{tutor.name}</p>
										<button
											className="unique_see_tutor_courses_button"
											onClick={() => {
												getTutor(tutor.id);
											}}
										>
											See courses
										</button>

										<div className="unique_tutor_rating_container">
											<div className="unique_rating_text_container">
												<span>{tutor.rating}</span>
											</div>

											<div className="unique_tutor_rating_stars_container">
												<div className="unique_tutor_rating_star1">
													<img src={coloredStar} alt="" />
													<img src={star} alt="" />
												</div>
											</div>
										</div>
									</div>
									{show &&
										tutor.courses.map((c: any, index: number) => (
											<div className="unique_all_courses_details">
												<div
													key={c.course_id}
													className="unique_all_courses_img"
												>
													<img src={c.cover_image} alt="unique_course_logo" />
												</div>
												<h3>{c.title}</h3>

												<h3>
													{c.rating}
													<span>({index})</span>
												</h3>
											</div>
										))}
								</div>
							);
						})}
					</div>

					{openModal && <Modal oneTutor={oneTutor} closeModal={setOpenModal} />}

					<div className="unique_see_more">
						<button className="unique_button_seee_more" onClick={showMoreBtn}>
							See more &#8964;
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default AllTutor;
