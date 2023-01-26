import React, { useEffect, useState } from "react";
import "./RecommendedCourses.css";
import { Link } from "react-router-dom";
import { apiGet } from "../../utils/api/axios";
import { whiteStar } from "../../assets/index";
import { Button } from "antd";
import StudentCourse from "../Cards/course";
import Rating from "../Rating/Rating";
import { Course } from "../../utils/Interfaces/index.dto";

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
					<h4 id="head_rec">Recommended Courses</h4>
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
						courses.map((item: Course) => {
							return (
								<Link to={`/coursedetail/${item.id}`} key={item.id}>
									<div>
										<StudentCourse course={item} />
									</div>
								</Link>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};

export default RecommendedCourses;

// "/coursedetail/:id"
