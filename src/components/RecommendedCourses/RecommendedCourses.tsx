import React, { useEffect, useState } from "react";
import "./RecommendedCourses.css";
import { Link } from "react-router-dom";
import { apiGet } from "../../utils/api/axios";
import { whiteStar } from "../../assets/index";

const RecommendedCourses = () => {
	const category: string | null = localStorage.getItem("user");
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const { data } = await apiGet(
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					`/users/recommended/${category}`
				);
				setCourses(data.recommendedCourse);
			} catch (error) {
				console.log(error);
			}
		};
		void fetchCourses();
	}, []);

	return (
		<>
			<div className="recommended-section">
				<div className="recommended-courses-bar">
					<h4>Recommended Courses</h4>
					<p>
						<Link to="/all-courses" className="see-all-courses">
							See all
						</Link>
					</p>
				</div>

				<div className="parent-course-container">
					{courses.length === 0 ? (
						<p>No Courses found</p>
					) : (
						courses.map((el: any) => {
							return (
								<div key={el.id} className="course-container">
									<div className="course-img">
										<img
											src={el.course_image}
											alt=""
											style={{ width: "350px" }}
										/>
									</div>

									<div className="course-details">
										<h3 className="course-title">{el.title}</h3>
										<p className="course-name">
											{el?.name !== undefined ? el.name : ""}
										</p>
										<div className="course-ratings">
											<div>{el.rating}</div>
											<div style={{ margin: "0 8px 0 8px" }}>
												⭐ ⭐ ⭐ ⭐{" "}
												<img
													style={{ marginTop: "0.1rem" }}
													src={whiteStar}
													alt=""
												/>
											</div>
											<div>{el.rating}</div>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};

export default RecommendedCourses;