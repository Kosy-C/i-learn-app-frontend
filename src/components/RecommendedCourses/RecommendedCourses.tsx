import React, { useEffect, useState } from "react";
import "./RecommendedCourses.css";
import { Link } from "react-router-dom";
// import { recommendedCoursesData } from "../data/recommendedCourses";
import axios from "axios";
import { apiGet } from "../../utils/api/axios";

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions
type Props = {};

const baseUrl = "http://localhost:4000";

const RecommendedCourses = (props: Props) => {
	const category = localStorage.getItem("user");
	const [courses, setCourses] = useState([]);
	const [tutors, setTutors] = useState([]);
	useEffect(() => {
		const fetch = async () => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			try {
				const response = await apiGet(`/users/feature-tutors`);
				// axios.get(`${baseUrl}/users/recommended/${category}`);

				// console.log("category is ", category);
				console.log("response is ", response.data.tutorSorted);
				// setCourses(data.recommendedCourse);
				setTutors(response.data.tutorSorted);
			} catch (error) {
				console.log(error);
			}
		};
		const fetchCourses = async () => {
			try {
				// await apiGet(`/users/recommended/${category}`);
				const { data } = await axios.get(
					`${baseUrl}/users/recommended/${category}`
				);

				console.log("data is ", data);
				// setCourses(data.recommendedCourse);
			} catch (error) {
				console.log(error);
			}
		};
		
		fetchCourses();
    fetch();
	}, []);
	// useEffect(() => {

	// }, []);
	return (
		<>
			<div className="all_container">
				<div className="tutors-bar">
					<h4>Featured Tutors</h4>
					<p>
						<Link to="/" className="see-all-tutors">
							See all
						</Link>
					</p>
				</div>

				<div className="tutor-details">
					{tutors.map((el: any) => {
						return (
							<div key={el.id} className="img-name">
								<div className="images">
									<img src={el.image} alt="" width="68px" height="68px" />
								</div>

								<p className="names">{el.name}</p>
								<p className="ratings">{el.rating}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className="recommended-section">
				<div className="recommended-courses-bar">
					<h4>Recommended Courses</h4>
					<p>
						<Link to="/" className="see-all-courses">
							See all
						</Link>
					</p>
				</div>

				<div className="parent-course-container">
					{courses.map((el: any) => {
						return (
							<>
								<div key={el.id} className="course-container">
									<div className="course-img">
										<img src={el.img} alt="" style={{ width: "350px" }} />
									</div>

									<div className="course-details">
										<h3 className="course-title">{el.title}</h3>
										{/* <p className="course-name">{el.name}</p> */}
										<div className="course-ratings">
											{/* <div>{el.rating1}</div> */}
											{/* <div style={{ margin: "0.4rem 0.4rem 0 0.4rem" }}>
												<img src={el.rating2} alt="" height="20px" />
											</div>
											<div>{el.ratingNo}</div> */}
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default RecommendedCourses;
