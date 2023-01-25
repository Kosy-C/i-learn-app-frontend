import React, { ChangeEvent, useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import "../AllCourses/AllCourses.css";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { TutorCourses } from "../../utils/Interfaces/index.dto";
import { apiGet } from "../../utils/api/axios";
import Pagination from "../Pagination/Pagination";
import { AxiosResponse } from "axios";

const AllCourses = () => {
	const [show, setShow] = useState(false);
	const [courses, setCourses] = useState([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [coursesPerPage, setCoursesPerPage] = useState<number>(6);
	const [totalCourses, setTotalCourses] = useState<number>(0);
	const [initialText, setInitialText] = useState<string>("");
	const [searchResponse, setSearchResponse] = useState([]);

	const getCourses = async () => {
		try {
			const response: AxiosResponse<any, any> = await apiGet(
				`/courses?page=${currentPage}&limit=${coursesPerPage}`
			);

			if (response.status === 200) {
				setCurrentPage((previous) => (previous = response.data.currentPage));
				setCourses((previous) => (previous = response.data.findCourse));
				setTotalCourses((previous) => (previous = response.data.courseNumber));
			}
		} catch (error) {
			console.log(error);
		}
	};
	const setCurrentPageWithPageNumber = async (
		pageNumber: number
	): Promise<void> => {
		try {
			setCurrentPage((previous) => (previous = pageNumber));
			const response = await apiGet(
				`/courses?page=${pageNumber}&limit=${coursesPerPage}`
			);
			console.log("res. data ", response.data);
			setCourses(response.data.findCourse);
		} catch (error) {
			console.log(error);
		}
	};

	const changingTextFunc = async (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | any
	) => {
		const { value } = event.target;
		console.log("value is ", value);
		console.log("event key ", event.key);
		console.log("event code ", event.code);

		setInitialText((previous) => (previous = value));
		try {
			const response = await apiGet(`/courses?query=${initialText}`);
			console.log("search response is ", response.data);
			setSearchResponse((previous) => (previous = response.data.findCourse));

		} catch (error) {
			console.log(error);
		}
	};
	// const searchFunction = async () => {
	// 	try {
	// 		const response = await apiGet(`/courses?query=${initialText}`);
	// 		console.log("click response is ", response.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		void getCourses();
	}, []);

	return (
		<div>
			<NavBar />
			<div className="all_courses_container">
				<div className="all_courses_hero">
					<h2 className="all_courses_heading">All Courses</h2>
					<input
						className="all_courses_search"
						type="text"
						placeholder="Search"
						onChange={changingTextFunc}
						onClick={changingTextFunc}
						onKeyDown={changingTextFunc}
					/>
					
				</div>
				<div className="all_courses_card_container">
					{courses.map((course: TutorCourses, index: number) => {
						return (
							<div key={index} className="allCourses_Cards">
								<div id="all_courses_cat">
									<h2>{course.category} courses</h2>
								</div>
								<div className="all_courses_card">
									{/* {course.course.slice(0, 6).map((c: any, index: number) => ( */}
									<Link
										to={`/coursedetail/${course.id}`}
										className="all_coursesLink"
									>
										<div className="all_courses_details">
											<div key={course.id} className="all_coursesHeader-img">
												<img
													className="all_courses-Img"
													src={course.course_image}
													alt="course_logo"
												/>
											</div>
											<div className="all_courses_features">
												<h2>
													{course.title} by {course?.tutor?.name}
												</h2>
												<p>{course.description}</p>
												<div className="all_coursesRating">
													<p>
														<Rating
															rating={Number(course.rating)}
															image={""}
															color={"#ffb400"}
														/>
													</p>
													<span>({index})</span>
												</div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Pagination
				totalCourses={totalCourses}
				coursesPerPage={coursesPerPage}
				setCurrentPage={setCurrentPageWithPageNumber}
				currentPage={currentPage}
			/>
		</div>
	);
};
export default AllCourses;

/* {show && (
										// course.course.slice(6).map((c: any, index: number) => (
										<div className="all_courses_details">
											<div key={course.id} className="all_courses_img">
												<img src={course.course_image} alt="course_logo" />
											</div>
											<div className="all_courses_features">
												<h2>{course.title}</h2>
												<p>{course.description}</p>
												<p>
													{course.rating}
													<span>
														<img src={coloredStar} />
													</span>
													<span>
														<img src={star} />
													</span>
													<span>({index})</span>
												</p>
											</div>
										</div>
									)} */

{
	/* );
						})
					// ) : (
					// 	<div>No courses for this category</div>
					// )}
				</div> */
}
// {!show && (
// 	<div className="all_courses_seeMore">
// 		<a href="#" onClick={showMore}>
// 			See more
// 		</a>
// 	</div>
// )}
// {show && (
// 	<div className="all_courses_seeMore">
// 		<a href="#" onClick={showMore}>
// 			See less
// 		</a>
// 	</div>
// )}
// 		</div>
// 	);
// };
