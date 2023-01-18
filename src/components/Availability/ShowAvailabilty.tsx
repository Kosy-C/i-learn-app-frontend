/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect } from "react";
import { apiGet } from "../../utils/api/axios";
import "./show.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { User } from "../../utils/Interfaces/index.dto";
interface Available {
	availableTime: string[];
	availableDate: string;
}

interface Props {
	tutor: User;
	title: string;
	onClick: () => void;
	id: string | undefined;
}
const TutorAvailability: React.FC<Props> = ({ tutor, title, onClick, id }) => {
	const [available, setAvailable] = useState<Available>({
		availableTime: [],
		availableDate: "",
	});
	const [availabilities, setAvailabilities] = useState<any>([]);
	const [availabletime, setAvailabletime] = useState([]);
	const [num, setNum] = useState(3);
	function getMonthName(monthNumber: any) {
		const date = new Date();
		date.setMonth(monthNumber - 1);
		return date.toLocaleString("en-US", { month: "long" });
	}
	// const params = useParams();
	useEffect(() => {
		const getAvailable = async () => {
			if (id !== undefined) {
				try {
					const { data } = await apiGet(`/users/get-available-tutors/${id}`);
					console.log(data.availabilities);
					if (data.message) {
						toast.success(data.message);
					}
					setAvailabletime(data.availabilities[0].availableTime);
					setAvailabilities(data.availabilities);
					setAvailable({
						availableTime: data.availabilities[0].availableTime,
						availableDate: data.availabilities[0].availableDate,
					});
				} catch (err: any) {
					console.error(err);
					toast.error(err.message);
				}
			}
		};
		void getAvailable();
	}, [id]);

	return (
		<>
			<ToastContainer />
			{available !== null && available.availableTime && (
				<div className="tutor-Availability-container">
					<div className="tutor-Availability-Info">
						<h3>Available Sessions</h3>
					</div>
					<hr />
					{availabilities &&
						availabilities.slice(0, num).map((date: any, index: number) => (
							<button
								key={index}
								onClick={() => setAvailabletime(date.availableTime)}
							>
								<div key={index} className="tutorAvailability-buttonContainer">
									<div>
										{
											new Date(date.availableDate)
												.toLocaleString("en-NG")
												.split("/")[0]
										}
									</div>
									<div>
										{getMonthName(
											new Date(date.availableDate)
												.toLocaleString("en-NG")
												.split("/")[1]
										)}
									</div>
									<div>{date.availableTime.length} slot</div>
								</div>
							</button>
						))}
					{num === 3 ? (
						<button onClick={() => setNum(num + 30)}>Load More</button>
					) : (
						<button onClick={() => setNum(3)}>See Less</button>
					)}
					<div>
						<h4>Available time slots</h4>
						<hr />
					</div>
					<div className="tutorAvailability-buttonContainer2">
						{availabletime.map((timeslot: any, index: number) => (
							<button type="submit" key={index}>
								{timeslot}
							</button>
						))}
					</div>
					<div className="tutorAvailability-submitButton">
						<button type="submit" onClick={onClick}>
							{title}
						</button>
					</div>
				</div>
			)}
		</>
	);
};
export default TutorAvailability;
