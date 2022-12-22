import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "react-calendar/dist/Calendar.css";
import "./savedReminder.css";
import { Calendar } from "react-calendar";

function SavedReminder() {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleDateClick = (date: Date) => {
		setSelectedDate(date);
	};
	return (
		<>
			<NavBar />
			<div className="savedReminder-container">
				<div className="savedReminder-container">
					<div className="saved-return-container">
						<Link to="/calender" className="calender-return-link">
							<AiOutlineArrowLeft /> Back
						</Link>
					</div>
					<div>
						<h1>All reminder will appear here</h1>
					</div>
					<div className="reminderContainer">
						<div className="today">
							<p>
								<b>Today</b>
							</p>
						</div>
						<div className="calander">
							<Calendar onChange={handleDateClick} value={selectedDate} />
						</div>
						<div className="backend">backend</div>
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
