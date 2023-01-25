import React, { useState } from "react";
import ReactDOM from "react-dom";
import NavBar from "../../components/navBar/navBar";
import SubNavbar from "../../components/SubNavbar/SubNavbar";
import chem from "../../assets/chem.jpg";

import "./TutorCoursesPage.css";

// interface Props {}

// const TutorCoursesPage = (props: Props) => {
const TutorCoursesPage = () => {
	const [readMore, setReadMore] = useState(3);

	const showMoreBtn = () => {
		setReadMore(readMore + 3);
	};
	return (
		<>
			<div className="contentPage">
				<NavBar />
				<SubNavbar name={"TutorName, TutorID"} welcome={undefined} />

				<div className="coursePage-container">
					<div className="coursePage-details">
						<div className="coursePage-image">
							<img src={chem} alt="Course Image" />
						</div>
						<div className="coursePage-writeUps">
							<h3 className="CoursePage-title">Course Title</h3>
							<h4 className="coursePage-desc">Description</h4>
							<h4 className="coursePage-price">Rating</h4>
						</div>
						<div className="coursePage-rating">
							<h4>Price</h4>
						</div>
					</div>

					<hr />

					<div className="coursePage-details">
						<div className="coursePage-image">
							<img src={chem} alt="Course Image" />
						</div>
						<div className="coursePage-writeUps">
							<h3 className="CoursePage-title">Course Title</h3>
							<h4 className="coursePage-desc">Description</h4>
							<h4 className="coursePage-price">Rating</h4>
						</div>
						<div className="coursePage-rating">
							<h4>Price</h4>
						</div>
					</div>

					<hr />

					<div className="coursePage-details">
						<div className="coursePage-image">
							<img src={chem} alt="Course Image" />
						</div>
						<div className="coursePage-writeUps">
							<h3 className="CoursePage-title">Course Title</h3>
							<h4 className="coursePage-desc">Description</h4>
							<h4 className="coursePage-price">Rating</h4>
						</div>
						<div className="coursePage-rating">
							<h4>Price</h4>
						</div>
					</div>
					<hr />
				</div>
				<button className="seeMore" onClick={showMoreBtn}>
					{" "}
					See More
				</button>
			</div>
		</>
	);
};

export default TutorCoursesPage;
