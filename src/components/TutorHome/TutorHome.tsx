import React, { useState } from "react";
// import { apiGet } from "../../utils/api/axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CreateAvailability from "../../components/Availability/CreateAvailability";
import TutorAvailability from "../../components/Availability/ShowAvailabilty";
import { Modal } from "react-responsive-modal";

// import axios from "axios";
import "./TutorHome.css";
import { User } from "../../utils/Interfaces/index.dto";

const TutorHeader = ({ tutor }: { tutor: User }) => {
	const [available, setAvailability] = useState(false);
	const onOpenAvailability = () => setAvailability(true);
	const onCloseAvailability = () => setAvailability(false);
	return (
		<div className="tutorMainContainer">
			<div className="tutorHeader">
				<div className="tutorHeader-img">
					<img className="tutor-Img" src={tutor.image} alt={tutor.image} />
				</div>

				<div className="tutorHeader-title">
					<h2>{tutor.name}</h2>
					<p>{tutor.email}</p>
				</div>
			</div>

			<div className="tab-Container">
				<Tabs>
					<TabList>
						<Tab className={"react-tabs__tab"}>Overview</Tab>
						<Tab className={"react-tabs__tab"}>My courses</Tab>
						<Tab className={"react-tabs__tab"}>Reviews</Tab>
						<Tab className={"react-tabs__tab"}>Bookings</Tab>
					</TabList>
					<div>
						<TabPanel>
							<div className="tutor-overview__container">
								<div className="tutor-overview-details">
									<p>
										Hello! I started my career working in Theatrical design in
										various entertainment areas. I switched to digital UX six
										years ago. Since then, I have been working in events,
										healthcare, cybersecurity, financial, and now I am working
										in Data Center Automation at AWS. In my free time, I hang
										with my dog, garden, tinker in my garage building weird
										things. I am an audiobook junkie and a voracious learner.
									</p>
								</div>
								<div className="tutor-overview-schedule"></div>
								<div className="create-avail">
									<TutorAvailability />
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<p>You have no courses yet</p>
						</TabPanel>
						<TabPanel>
							<p>You have no reviews yet</p>
						</TabPanel>
						<TabPanel>
							<p>You have no Bookings yet</p>
						</TabPanel>
					</div>
				</Tabs>
			</div>
			<button type="submit" onClick={onOpenAvailability}>
				Set Availability
			</button>
			<div>
				<Modal open={available} onClose={onCloseAvailability}>
					<CreateAvailability />
				</Modal>
			</div>
		</div>
	);
};

export default TutorHeader;

// import React, { useState } from 'react';
// import { DatePicker, TimeSlot } from 'react-timeslots';
// import axios from 'axios';

// interface AvailableSlot {
//   date: string;
//   times: string[];
// }

// const AvailableTeachingTime: React.FC = () => {
//   const [availableDate, setAvailableDate] = useState<string>('');
//   const [availableTime, setAvailableTime] = useState<string[]>([]);

//   const handleDateChange = (date: Date | null) => {
//     if (date) {
//       setAvailableDate(date.toISOString().slice(0, 10));
//     }
//   };

//   const handleTimeChange = (times: string[]) => {
//     setAvailableTime(times);
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const availableSlot: AvailableSlot = {
//       date: availableDate,
//       times: availableTime
//     }
//     try {
//       await axios.post('/api/available-slots', availableSlot);
//       alert('Your available teaching times have been sent to the backend!');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Available Date:
//         <DatePicker
//           value={availableDate}
//           onChange={handleDateChange}
//           dateFormat="yyyy-MM-dd"
//         />
//       </label>
//       <br />
//       <label>
//         Available Times:
//         <TimeSlot onChange={handleTimeChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AvailableTeachingTime;
