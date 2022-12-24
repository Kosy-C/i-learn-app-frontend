import React from "react";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import SubNavbar from "../SubNavbar/SubNavbar";
import NavBar from "../navBar/navBar";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div>
			<NavBar />
			<SubNavbar />
			<div className="container">
				<FeaturedTutors />
				<RecommendedCourses />
			</div>
		</div>
	);
};

export default Dashboard;
