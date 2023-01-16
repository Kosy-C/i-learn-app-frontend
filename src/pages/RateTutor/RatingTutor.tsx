import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../utils/api/axios";
import StarRating from "../../components/StarRating/StarRating";
import "./RatingTutor.css";
import NavBar from "../../components/navBar/navBar";
import { Link, useParams } from "react-router-dom";

import { FaChevronLeft, FaRegEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

interface FormData {
	ratingValue: number;
	description: string;
}

const Card: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		ratingValue: 0,
		description: "",
	});

	const [tutorDetails, setTutorDetails] = useState<any>({});

	const { tutorId } = useParams();

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = async () => {
		// console.log(formData);
		// const postComment = async () => {
		// 	console.log(formData);
		try {
			setFormData({ ratingValue: 0, description: "" });
			const postComment = await apiPost(
				`/users/tutors/${tutorId}/rate`,
				formData
			);
			toast.success(postComment.data.message);
		} catch (error: any) {
			toast.error(error.response.data.message);
		}

		// };
		// postComment();
		// window.location.reload();
	};

	useEffect(() => {
		const fetch = async () => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			try {
				const response = await apiGet(`/users/atutordetail/${tutorId}`);
				// console.log(response.data);
				setTutorDetails(response.data.message);
			} catch (error) {
				console.log(error);
			}
		};
		void fetch();
	}, []);

	const handleStarRatingClick = (rating: number) => {
		setFormData({ ...formData, ratingValue: rating });
	};

	return (
		<>
			<NavBar />
			<div className="tutorContainer">
				<div className="lineup">
					<Link className="back" to="#">
						<p>
							{" "}
							<span id="icon">
								<FaChevronLeft />
							</span>
							&nbsp; Back
						</p>
					</Link>
					<h1 id="tutor">Rate Tutor</h1>
				</div>
				<hr />
				<div className="card">
					<div className="card-content">
						<img
							src={tutorDetails.image}
							width={80}
							height={80}
							alt="Tutor Picture"
							id="imageAvatar"
						/>
						<div id="tutorName">
							<h3>{tutorDetails.name}</h3>
							<p>
								<FaRegEnvelope />
								&nbsp;{tutorDetails.email}
							</p>
						</div>
					</div>
					<div className="card-footer">
						<StarRating
							onClick={handleStarRatingClick}
							// value={formData.ratingValue}
						/>
						<label id="page">Comment</label>
						<textarea
							name="description"
							className="ratingTextarea"
							rows={10}
							cols={60}
							onChange={handleChange}
							value={formData.description}
						/>
						<div className="submit-container">
							<button
								type="submit"
								className="submit-button"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Card;




// import { useState, BaseSyntheticEvent, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import NavBar from "../../components/navBar/navBar";
// import StarRatingComponent from "react-star-rating-component";
// import "./RateCourses.css";
// import { apiGet, apiPost } from "../../utils/api/axios";
// import { toast } from "react-toastify";
// import { courseDetails, Courses } from "../../utils/Interfaces/index.dto";
// // import { useGlobalState, GlobalStateInterface } from "../../useContext/context"
// const RateCourses = () => {
//     // const {initialStar, setInitialStar} = useGlobalState()
//     const [initialStar, setInitialStar] = useState(1);
//     const [halfStar, setHalfStar] = useState(0)
//     const [initialComment, setInitialComment] = useState({ comment: "" });
//     const [courses, setCourse] = useState(courseDetails);
//     const { courseId } = useParams();
//     const fetchCourseDetails = async () => {
//         try {
//             const response = await apiGet(`/courses/get-course/${courseId}`);
//             setCourse(response.data.course);
//         } catch (error: any) {
//             toast.error(error);
//         }
//     };
//     const clickedStar = (next: number, prev: number, name: string) => {
//         setInitialStar((previous) => {
//             return next;
//         });
//     };
//     const selectHalfIcon = (next: number, prev: number, name: string) => {
//         setHalfStar((previous) => {
//             return prev+(0.5)
//         })
//     };
//     const getInputValues = (event: BaseSyntheticEvent) => {
//         event.preventDefault();
//         const { name, value } = event.target;
//         setInitialComment({ ...initialComment, [name]: value });
//     };
//     const submitDetails = async () => {
//         try {
//             const data = {
//                 ratingValue: initialStar,
//                 description: initialComment.comment,
//             };
//             setInitialComment({ comment: "" });
//             setInitialStar((prev)=>prev=1)
//             const res = await apiPost(`/courses/rate-courses/${courseId}`, data);
//             toast.success(res.data.message);
//         } catch (error: any) {
//             toast.error(error.response.data.message);
//         }
//     };
//     useEffect(() => {
//         void fetchCourseDetails();
//     }, []);
//     return (
//         <>
//             <NavBar />
//             <div className="rate_course_container">
//                 <div className="rate_course_subNavbar">
//                     <div className="rate_course_left">
//                         <button className="rate_course_arrowButton">&#8249;</button>
//                         <button className="rate_course_backButton">Back</button>
//                     </div>
//                     <div className="rate_course_right">
//                         <h1>Rate Course</h1>
//                     </div>
//                 </div>
//                 <hr className="rate_course_line" />
//                 <div className="rate_course_body">
//                     <div className="rate_course_firstContainer">
//                         {/* <div className="rate_course_logo">
//                             <img src="" alt="course_logo" />
//                         </div> */}
//                         {
//                             <div className="rate_course_titleDesc">
//                                 <div className="rate_course_logo">
//                                     <img
//                                         className="rate_course_image"
//                                         src={courses.course_image}
//                                     />
//                                 </div>
//                                 <div className="rate_course-subheading">
//                                     <h6 className="rate_course_titleAndName">
//                                         {courses.title} by {courses.tutor?.name}
//                                     </h6>
//                                     <span>{courses.description}</span>
//                                 </div>
//                             </div>
//                             // <div className="rate_course_titleDesc">No courses</div>
//                         }
//                     </div>
//                     <div className="rate_course_starContainer">
//                         <h3>Rate Course</h3>
//                         <StarRatingComponent
//                         renderStarIcon={() => <span className="rate_course_starComponent">★</span>}
//                             name="star"
//                             value={initialStar}
//                             onStarClick={clickedStar}
//                             editing={true}
//                         />
//                     </div>
//                     <div className="rate_course_comment">
//                         <span>Comment</span>
//                         <textarea
//                             className="rate_course_textArea"
//                             name="comment"
//                             onChange={getInputValues}
//                             value={initialComment.comment}
//                             placeholder="Write your comment..."
//                         />
//                         <button className="rate_course_sendButton" onClick={submitDetails}>
//                             Send
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default RateCourses;