import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./student.css";
import maths from "../../assets/maths.jpg";
import axios from "axios";
import { apiGet } from "../../utils/api/axios";
import NavBar from "../navBar/navBar";
const StudentHistoryPage = () => {
	const [courses, setCourses] = useState<any>([]);
	useEffect(() => {
		const getHistory = async () => {
			try {
				const { data } = await apiGet("/courses/getStudentHistory");
				setCourses(data.courses);
			} catch (error) {
				console.log(error);
			}
		};
		getHistory();
	}, []);
	const params = useParams()
	const navigate = useNavigate()
	// const rateTutor =()=>{
	// 	navigate(``)
	// }
	return (
		<>
			<div>
				<NavBar />
				<div className="header">
					<h2>My Courses</h2>
				</div>
				{courses.map((course: any) => {
					return (
						<div className="container" key={course.id}>
							<div className="card-container">
								<div className="card">
									<Link to={`/paid-courses/${course.id}`}>
										<img
											src={course.course_image}
											alt=""
											className="img_container"
										/>
									</Link>
									<div className="card-details">
										<div className="subj">
											<Link to={`/paid-courses/${course.id}`}>
												<h3>
													{" "}
													<b>
														{course.title}
														<br /> {course.description}
													</b>
												</h3>
											</Link>
											{/* <h3> <b>Chemistry for beginners:<br/>30 days perfection</b></h3> */}
											<span>
												{" "}
												<Link to={`/tutorRating/${course.tutorId}`}>
												<button type="submit"> Rate Tutor</button>
												</Link>
											</span>
										</div>
										<div className="student-details">
											<p>{course.category}</p>
											{/* <p>Adekunle Ayo</p> */}
											<p className="progressbar"></p>
											<p>Your progress</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default StudentHistoryPage;
