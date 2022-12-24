import React from "react";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import SubNavbar from "../SubNavbar/SubNavbar";
import NavBar from "../navBar/navBar";
import "./Dashboard.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions
type Props = {};

const Dashboard = (props: Props) => {
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
