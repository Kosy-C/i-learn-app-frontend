/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect } from "react";
import { apiGet } from "../../utils/api/axios";
import "./show.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

interface Available {
	availableTime: string[];
	availableDate: string;
}

const TutorAvailability = () => {
	const [available, setAvailable] = useState<Available>({
		availableTime: [],
		availableDate: "",
	});

	function getMonthName(monthNumber: any) {
		const date = new Date();
		date.setMonth(monthNumber - 1);

		return date.toLocaleString("en-US", { month: "long" });
	}
	const params = useParams();

	useEffect(() => {
		const getAvailable = async () => {
			if (params.id !== undefined) {
				try {
					const { data } = await apiGet(
						`/users/get-available-tutors/${params.id}`
					);
					console.log(data.availabilities);
					if (data.message) {
						toast.success(data.message);
					}
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
	}, [params.id]);

	const handleBookSession = () => {
		toast.success("Session booked successfully!");
	};

	return (
		<>
			<ToastContainer />
			{available !== null && available.availableTime && (
				<div className="tutor-Availability-container">
					<div className="tutor-Availability-Info">
						<h3>Available Sessions</h3>
					</div>
					<hr />
					<div className="tutorAvailability-buttonContainer">
						{
							new Date(available.availableDate)
								.toLocaleString("en-NG")
								.split("/")[0]
						}
						<div>
							{getMonthName(
								new Date(available.availableDate)
									.toLocaleString("en-NG")
									.split("/")[1]
							)}
						</div>
						<div>{available.availableTime.length} slot</div>
					</div>
					<div>
						<h4>Available time slots</h4>
						<hr />
					</div>
					<div className="tutorAvailability-buttonContainer2">
						{available.availableTime.map((timeslot: any, index: number) => (
							<button type="submit" key={index}>
								{timeslot}
							</button>
						))}
					</div>
					<div className="tutorAvailability-submitButton">
						<button type="submit" onClick={handleBookSession}>
							Book Session
						</button>
					</div>
				</div>
			)}
		</>
	);
};
export default TutorAvailability;
