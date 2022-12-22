import React from "react";
import woman from "../../assets/woman.svg";
import { Link } from "react-router-dom";
import "./reminder.css";
import NavBar from "../navBar/navBar";
const ReminderPage = () => {
	return (
		<>
			<NavBar />
			<div className="reminder-container">
				<div className="reminderBody">
					<div className="reminder-header">
						<p className="firstChild">
							Improve and measure your skills with study reminder
						</p>
						<p className="secondChild">
							Set reminder in your application and save time automation
							tracking.
						</p>
					</div>
					<div className="reminder-image-container">
						<img className="reminder-image" src={woman} alt="woman-calendar" />
					</div>
					<div className="btn">
						<Link to="/calender" className="btn-link">
							Set Reminder
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReminderPage;

// import * as React from 'react';
// import { useState } from 'react';

// interface Reminder {
//   title: string;
//   date: string;
//   time: string;
//   details: string;
// }

// interface Props {
//   studentName: string;
// }

// const ReminderTab: React.FunctionComponent<Props> = (props) => {
//   const { studentName } = props;
//   const [reminders, setReminders] = useState<Reminder[]>([]);

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Get values from form fields
//     const title = event.currentTarget.elements.title.value;
//     const date = event.currentTarget.elements.date.value;
//     const time = event.currentTarget.elements.time.value;
//     const details = event.currentTarget.elements.details.value;

//     // Add new reminder to array of reminders
//     setReminders([...reminders, { title, date, time, details }]);

//     // Clear form fields
//     event.currentTarget.reset();
//   };

//   return (
//     <div>
//       <h1>{`${studentName}'s Reminders`}</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input type="text" id="title" name="title" required />
//         <br />
//         <label htmlFor="date">Date:</label>
//         <input type="date" id="date" name="date" required />
//         <br />
//         <label htmlFor="time">Time:</label>
//         <input type="time" id="time" name="time" required />
//         <br />
//         <label htmlFor="details">Details:</label>
//         <textarea id="details" name="details" />
//         <br />
//         <button type="submit">Add Reminder</button>
//       </form>
//       <br />
//       <button
//         onClick={() => {
//           // Navigate to page that shows all reminders
//         }}
//       >
//         View Reminders
//       </button>
//     </div>
//   );
// };
// export default ReminderTab
// const AllReminders: React.FunctionComponent<Props> = (props) => {
//     const { studentName, reminders } = props;

//     return (
//       <div>
//         <h1>{`${studentName}'s Reminders`}</h1>
//         {reminders.map((reminder) => (
//           <div key={reminder.title}>
//             <h2>{reminder.title}</h2>
//             <p>
//               {reminder.date} {reminder.time}
//             </p>
//             <p>{reminder.details}</p>
//           </div>
//         ))}
//         <br />
//         <button
//           onClick={() => {
//             // Navigate back to "set reminder" page
//           }}
//         >
//           Set Reminder
//         </button>
//       </div>
//     )}
