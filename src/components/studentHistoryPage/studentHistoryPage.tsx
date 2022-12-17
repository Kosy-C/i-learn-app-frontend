import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./student.css";
import maths from "../../assets/maths.jpg";
import axios from "axios";
import { apiGet } from "../../utils/api/axios";
const studentHistoryPage = () => {
	const [courses, setCourses] = useState<any>([]);
	const getHistory = async () => {
        try {
            const id = localStorage.getItem("id");
		const { data } = await apiGet(`/courses/getStudentHistory`);
		setCourses(data.courses);
        } catch (error) {
            console.log(error)
        }
		
	};
	useEffect(() => {
		getHistory();
	}, []);
	return (
		<>
			{courses.map((course: any) => {
				return (
					<div className="container">
						<div className="header">
							<h2>My Courses</h2>
						</div>
						<div className="card-container">
							<div className="card">
								<img src={maths} alt="" className="img_container" />
								<div className="card-details">
									<div className="subj">
										<h3>
											{" "}
											<b>
												{course.title}
												<br /> {course.subtitle}
											</b>
										</h3>
										{/* <h3> <b>Chemistry for beginners:<br/>30 days perfection</b></h3> */}
										<span>
											{" "}
											<button type="submit"> Rate Tutor</button>
										</span>
									</div>
									<div className="student-details">
										<p>{course.tutorName}</p>
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
		</>
	);
};
export default studentHistoryPage;
