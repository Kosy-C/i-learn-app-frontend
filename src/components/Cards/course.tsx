import React, { useEffect, useState } from "react";
import "../TutorHome/TutorHome.css";
import { Link } from "react-router-dom";
import { apiDelete, apiGet, apiUpdate } from "../../utils/api/axios";
import { whiteStar } from "../../assets/index";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import { toast } from "react-toastify";
import { User } from "../../utils/Interfaces/index.dto";

const CourseCard = ({ course }: any) => {
	const [user, setUser] = useState<User>();
	const loggedInUser = async () => {
		const { data } = await apiGet("/users/profile");
		setUser(data.userDetails);
	};
	const handleEditedClick = async (id: string) => {
		try {
			const data = {};
			const response = await apiUpdate(`/courses/updateCourse/${id}`);
			console.log("response is ", response);
		} catch (error: any) {
			toast.error(error.response.data);
		}
	};
	const handleDeletedClick = async (id: string) => {
		try {
			const response = await apiDelete(`/courses/deleteCourse/${id}`);
			console.log("response is ", response);
			// const remainingCourses = [...courses].filter((course)=>{
			//     return course.id !== id
			//   })
			//   //Update state
			//   setCourses(remainingCourses)
			//   // setCourses(response.data.remainingCourses)
		} catch (error: any) {
			toast.error(error.response.data);
		}
		useEffect(() => {
			return () => {
				loggedInUser();
			};
		}, []);
	};
	return (
		<>
			<div className="tutorCourse-container">
				<div className="tutorCourse-img">
					<img
						className="tutorCourse_imageBody"
						src={course.course_image}
						alt="courseIcon"
					/>
				</div>

				<div className="tutorCourse-details">
					<div>
						<h3 className="tutorCourse-title">{course.title}</h3>
					</div>
					<div className="tutorCourse-nameContainer">
						<div className="tutorCourse-name">
							<p>{course?.name !== undefined ? course.name : ""}</p>
						</div>
						<div className="tutorCourse_rating">
							<Rating
								rating={Number(course.rating)}
								image={""}
								color={"#ffb400"}
							/>
						</div>
					</div>
				</div>
				{user?.userType === "Tutor" && (
					<div className="tutorCourse_button">
						<Button
							type={"button"}
							onClick={() => handleEditedClick(course.id)}
							className={"tutorCourse_editButton"}
							title={"Edit"}
						/>
						<Button
							type={"button"}
							onClick={() => handleDeletedClick(course.id)}
							className={"tutorCourse_deleteButton"}
							title={"Delete"}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default CourseCard;
