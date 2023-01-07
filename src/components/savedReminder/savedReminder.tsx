import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "react-calendar/dist/Calendar.css";
import "./savedReminder.css";
import { Calendar } from "react-calendar";
import axios from "axios";
const jsonUrl = "http://localhost:8000";

function SavedReminder() {
	const [reminder, setReminder] = useState([]);
	const getReminder = async () => {
		try {
			const response = await axios.get(jsonUrl);
			console.log("response data is ", response.data);
			setReminder(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getReminder();
	}, []);

	return (
		<>
			<NavBar />
			<div className="savedReminder-container">
				<div className="savedReminder-container">
					<div className="saved-return-container">
						<Link to="/calender" className="calender-return-link">
							<AiOutlineArrowLeft /> Back
						</Link>
						<div>
							<h1>All reminder will appear here</h1>
						</div>
					</div>
					<div className="reminderContainer">
						<div className="today">
							<span>
								{new Date().getMonth()} {new Date().getDate()},{" "}
								{new Date().getFullYear()}
							</span>
							<br />
							<p>Today</p>
						</div>
						<div className="calander">
							<Calendar />
						</div>
						<div className="savedDetails">
							{/* <div className="savedDuration"> */}
							{/* <p>
									{new Date().getMonth()} {new Date().getDate()},{" "}
									{new Date().getFullYear()}
								</p>
								<p>
									{new Date().getMonth()} {new Date().getDate()},{" "}
									{new Date().getFullYear()}
								</p>
							</div> */}
							{/* <div className="savedCard">
								<p>Learn Coding</p>
								<br />
								<span>Javascript coding practice</span>
							</div> */}
							<div className="taskContainer">
								<div>
									<h4>10:15</h4>
									<p>10:30</p>
								</div>
								<hr />
								<div>
									<h5>Learn Coding</h5>
									<p>Javascript is a thing we know </p>
								</div>
							</div>
						</div>

						<div>
							{" "}
							<button className="addNew">
								<Link to="/Calender" className="addNew">
									<IoMdAddCircleOutline /> Add New
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SavedReminder;
