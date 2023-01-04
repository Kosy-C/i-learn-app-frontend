/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "./calender.css";
import {
	reminder,
	Hours,
	Minutes,
} from "../../utils/reminderUtils/reminderUtils";

function Calender() {
	const [months] = useState(reminder);
	const [days, setDays] = useState(reminder[1]);
	const [hours] = useState(Hours);
	const [minutes] = useState(Minutes);
	return (
		<>
			<NavBar />
			<div className="reminder-container">
				<div className="calendar-container">
					<div className="calendar-sub-container">
						<div className="return-container">
							<Link to="/reminder" className="calender-return-link">
								<AiOutlineArrowLeft /> Back
							</Link>
						</div>

						<div>
							<p className="calendar-title">Title</p>
							<input
								placeholder="Type a title"
								className="calendarPlaceholder"
							/>
						</div>
						<div>
							<div>
								<p className="calendar-title" id="calendarTitle">
									Date and Time
								</p>
							</div>
							<div className="divMonth">
								<h1 className="divCalendarMonth">Months</h1>
								<h1 className="divCalendarDay">Days</h1>
								<h1 className="divCalendarHour">Hour</h1>
								<h1 className="divCalendarMunite">Minutes</h1>
							</div>

							<div className="calendar-table">
								<div id="months" className="months">
									{Object.keys(months).map((month) => (
										<p
											onClick={(e) => {
												setDays(months[month]);
											}}
										>
											{month}
										</p>
									))}
								</div>
								<div id="days" className="days">
									{days.map(
										(
											day:
												| string
												| number
												| boolean
												| React.ReactElement<
														any,
														string | React.JSXElementConstructor<any>
												  >
												| React.ReactFragment
												| React.ReactPortal
												| null
												| undefined
										) => (
											<p>{day}</p>
										)
									)}
								</div>
								<div id="hours" className="hours">
									{hours.map((hour) => (
										<p>{hour}</p>
									))}
								</div>
								<div id="minutes" className="minutes">
									{minutes.map((minute) => (
										<p>{minute}</p>
									))}
								</div>
								<div className="ampm">
									<p>AM</p>
									<p>PM</p>
								</div>
							</div>
							<div>
								<div>
									<p className="calendar-title" id="calendarNote">
										Note
									</p>
									<textarea
										placeholder="Write your important note..."
										className="textarea"
									/>
								</div>

								<button className="saveButton">
									<Link to="/savedReminder" className="linkSave">
										Save
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Calender;
