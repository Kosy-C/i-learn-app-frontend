import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "./savedReminder.css";
// import ReminderCalendar from "react-remindar-calendar/dist"

function SavedReminder() {
	return (
		<>
			<NavBar />
			<div className="savedReminder-container">
				<div className="saved-return-container">
					<Link to="/calender" className="calender-return-link">
						<AiOutlineArrowLeft /> Back
					</Link>
				</div>
				<p>All reminder will appear here</p>
				<div>
					{/* <p>{new Date().getMonth() + 1} {new Date().getDate()}, {new Date().getFullYear()}</p> */}

					<p>
						<b>Today</b>
					</p>
				</div>
			</div>
		</>
	);
}

export default SavedReminder;

// import React, { useState, useEffect } from 'react';

// interface Props {
//   // Props go here
// }

// const SavedReminder: React.FC<Props> = (props) => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentDate(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const date = currentDate;
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const hour = date.getHours().toString().padStart(2, '0');
//   const minute = date.getMinutes().toString().padStart(2, '0');
//   const ampm = date.getHours() < 12 ? 'AM' : 'PM';

//   return (
//     <div>
//       {day} {month} {hour} {minute} {ampm}
//     </div>
//   );
// };

// export default SavedReminder;
