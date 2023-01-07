import React, { useEffect, useState } from "react";
// import NavBar from '../../components/navBar/navBar';

import axios from "axios";
import coloredStar from "../../assets/colored-star.png";

import "./TutorAllCoursesModal.css";
// import NavBar from './navBar/navBar';
import database from "../../db/database.json";

const jsonUrl = "http://localhost:8000/tutors";
const TutorAllCoursesModal = (tutors: any) => {
	const [showTutorCourse, setShowTutorCourse] = useState(false);
	const [tutor, setTutor] = useState([]);
	const getTutor = async () => {
		try {
			const response = await axios.get(jsonUrl);
			console.log(response.data);
			setTutor(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getTutor();
	}, []);

	return (
		<div className="tutor_all_courses_container">
			<div className="tutor_all_courses_background_div"></div>
			{tutor.courses.map()}
		</div>
	);
};
export default TutorAllCoursesModal;
