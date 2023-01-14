import { useState, BaseSyntheticEvent, useEffect } from "react";
import NavBar from "../../components/navBar/navBar";
import StarRatingComponent from "react-star-rating-component";
import "./RateCourses.css";
import { apiGet, apiPost } from "../../utils/api/axios";
import { toast } from "react-toastify";
import { Courses } from "../../utils/Interfaces/index.dto";

const RateCourses = () => {
	const [initialStar, setInitialStar] = useState(1);
	const [initialComment, setInitialComment] = useState({ comment: "" });
	const [courses, setCourse] = useState([]);

	const queryParams = new URLSearchParams(window.location.search);
	const newcourseId = queryParams.get("id") as string;
	const courseId = "4f21fae9-af74-45c6-9c8a-f1f206175df5";

	const fetchCourseDetails = async () => {
		try {
			const response = await apiGet(`/courses/get-course/${courseId}`);
			setCourse(response.data.course);
			console.log("response is ", response.data.course);
		} catch (error: any) {
			toast.error(error);
		}
	};
	const clickedStar = (next: number, prev: number, name: string) => {
		setInitialStar((previous) => {
			return next;
		});
	};
	const getInputValues = (event: BaseSyntheticEvent) => {
		event.preventDefault();
		const { name, value } = event.target;
		setInitialComment({ ...initialComment, [name]: value });
	};
	const submitDetails = async () => {
		try {
			const data = {
				courseId,
				ratingValue: initialStar,
				description: initialComment.comment,
			};
			console.log(data);
			setInitialComment({ comment: "" });
			const res = await apiPost(`/courses/rateCourses/`, data);
			toast.success(res.data.message);
		} catch (error: any) {
			toast.error("Something went wrong");
		}
	};
	useEffect(() => {
		void fetchCourseDetails();
	}, []);
	return (
		<>
			<NavBar />
			<div className="rate_course_container">
				<div className="rate_course_subNavbar">
					<div className="rate_course_left">
						<button className="rate_course_arrowButton">&#8249;</button>
						<button className="rate_course_backButton">Back</button>
					</div>
					<div className="rate_course_right">
						<h1>Rate Course</h1>
					</div>
				</div>
				<hr className="rate_course_line" />
				<div className="rate_course_body">
					<div className="rate_course_firstContainer">
						{/* <div className="rate_course_logo">
							<img src="" alt="course_logo" />
						</div> */}
						{courses.length > 0 ? (
							courses.map((course: Courses, index: number) => (
								<div className="rate_course_titleDesc" key={course.id}>
									<div className="rate_course_logo">
										<img
											className="rate_course_image"
											src={course.course_image}
										/>
									</div>
									<div className="rate_course-subheading">
										<h4>
											{course.title} by {course.tutor?.name}
										</h4>
										<span>{course.description}</span>
									</div>
								</div>
							))
						) : (
							<div className="rate_course_titleDesc">No courses</div>
						)}
					</div>
					<div className="rate_course_starContainer">
						<h3>Rate Course</h3>
						<StarRatingComponent
							name="star"
							value={initialStar}
							onStarClick={clickedStar}
							editing={true}
						/>
					</div>
					<div className="rate_course_comment">
						<span>Comment</span>
						<textarea
							className="rate_course_textArea"
							name="comment"
							onChange={getInputValues}
							value={initialComment.comment}
							placeholder="Write your comment..."
						/>
						<button className="rate_course_sendButton" onClick={submitDetails}>
							Send
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default RateCourses;
