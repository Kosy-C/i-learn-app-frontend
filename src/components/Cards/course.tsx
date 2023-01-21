import React from "react";
import "../TutorHome/TutorHome.css";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import { CourseProps } from "../../utils/Interfaces/index.dto";
import Modal from "react-responsive-modal";
import TutorCreateForm, {
	courseDetails,
} from "../../pages/TutorCourseOperations/TutorCourseOperations";

const CourseCard = ({
	course,
	tutor,
	handleEditedClick,
	handleDeletedClick,
	profile,
	onCloseProfile,
	onOpenProfile,
}: any) => {
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
							<p>{course?.title !== undefined ? course.title : ""}</p>
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

				{tutor?.userType === "Tutor" && (
					<div className="tutorCourse_button">
						<Button
							// type={"submit"}
							onClick={async () => await handleEditedClick(course)}
							className={"tutorCourse_editButton"}
							title={"Edit"}
						/>
						<Button
							// type={"button"}
							onClick={async () => await handleDeletedClick(course.id)}
							className={"tutorCourse_deleteButton"}
							title={"Delete"}
						/>
					</div>
				)}
				<Modal open={profile} onClose={onCloseProfile}>
					<TutorCreateForm
						tutor={tutor}
						tutorProps={""}
						onCloseProfile={() => {}}
					/>
				</Modal>
			</div>
		</>
	);
};

export default CourseCard;
