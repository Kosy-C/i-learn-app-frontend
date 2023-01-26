import React, { ChangeEvent, useEffect, useState, useRef } from "react";
import NavBar from "../../components/navBar/navBar";
import "../AllCourses/AllCourses.css";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { TutorCourses } from "../../utils/Interfaces/index.dto";
import { apiGet } from "../../utils/api/axios";
import Pagination from "../Pagination/Pagination";
import { AxiosResponse } from "axios";

const AllCourses = () => {
	const [isSearch, setIsSearch] = useState(false);
	const [courses, setCourses] = useState([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [coursesPerPage, setCoursesPerPage] = useState<number>(6);
	const [totalCourses, setTotalCourses] = useState<number>(0);
	const [initialText, setInitialText] = useState<string>("");
	const [searchResponse, setSearchResponse] = useState([]);
	const ref = useRef<HTMLInputElement>(null);

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
			setCourses(response.data.findCourse);
		} catch (error) {
			console.log(error);
		}
	};

	const changingTextFunc = async (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | any
	) => {
		setIsSearch(true);
		const { value } = event.target;

		setInitialText((previous) => (previous = value));
		try {
			const response = await apiGet(`/courses?query=${initialText}`);
			console.log("find course is ", response.data.findCourse);
			if (response.status === 200) {
				setSearchResponse((previous) => (previous = response.data.findCourse));
			}
		} catch (error) {
			console.log(error);
		}
	};
	// const searchFunction = async () => {
	useEffect(() => {
		void getCourses();
	}, []);
	useEffect(() => {
		function handleClickOutside(
			event:
				| ChangeEvent<HTMLInputElement>
				| ChangeEvent<HTMLSelectElement>
				| any
		) {
			if (ref.current != null && !ref.current.contains(event.target)) {
				setIsSearch(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div>
			<NavBar />
			<div className="all_courses_container">
				<div className="all_courses_hero">
					<h2 className="all_courses_heading">All Courses</h2>
					<input
						className="all_courses_search"
						type="text"
						placeholder="Search for courses by title"
						onChange={changingTextFunc}
						onClick={changingTextFunc}
						onKeyDown={changingTextFunc}
					/>
				</div>
				{isSearch && (
					<div className="all_courses_overlayContainer" ref={ref}>
						{searchResponse.map((course: any, index: number) => (
							<>
								<Link
									to={`/coursedetail/${course.id}`}
									className="all_coursesLink"
								>
									<div key={index} className="all_courses_InnerContainer">
										<div className="all_courses_overlay">
											<img
												className="all_coursesOverlayImg"
												src={course.course_image}
												alt="course_logo"
											/>
										</div>
										<div>
											<p>{course.title}</p>
										</div>
									</div>
								</Link>
							</>
						))}
					</div>
				)}
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
