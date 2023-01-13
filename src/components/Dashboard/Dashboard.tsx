import React from "react";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import SubNavbar from "../SubNavbar/SubNavbar";
import NavBar from "../navBar/navBar";
import "./Dashboard.css";
import { Button } from "antd";

const Dashboard = () => {
	
	return (
		<div>
			<NavBar />
			<SubNavbar />
			<div className="container">
				<FeaturedTutors />
				{/*Create an addcourse button with a class and link it to tutor-course-operations route */}

				
				<RecommendedCourses />
			</div>
		</div>
	);
};



export default Dashboard;
