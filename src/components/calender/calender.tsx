/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "./calender.css";

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
									{/* <h1 className="headerMonths">month</h1> */}
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

const reminder: any = {
	1: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	],
	2: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29,
	],
	3: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30,
	],
	4: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	],
	5: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	],
	6: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30,
	],
	7: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	],
	8: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	],
	9: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30,
	],
	10: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	],
	11: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30,
	],
	12: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	],
};

const Hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Minutes: string[] = [
	"00",
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
	"24",
	"25",
	"26",
	"27",
	"28",
	"29",
	"30",
	"31",
	"32",
	"33",
	"34",
	"35",
	"36",
	"37",
	"38",
	"39",
	"40",
	"41",
	"42",
	"43",
	"44",
	"45",
	"46",
	"47",
	"48",
	"49",
	"50",
	"51",
	"52",
	"53",
	"54",
	"55",
	"56",
	"57",
	"58",
	"59",
];

export default Calender;
