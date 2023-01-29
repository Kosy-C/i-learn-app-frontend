/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect } from "react";
import { apiGet, apiPost } from "../../utils/api/axios";
import "./show.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { User } from "../../utils/Interfaces/index.dto";
interface Available {
	availableTime: string[];
	availableDate: string;
}

export interface Availability {
	id: string;
	userId: string;
	availableTime: string[];
	availableDate: Date;
	availableSlots: number;
	selectedTime: string[];
	createdAt: Date;
	updatedAt: Date;
}

interface Props {
	tutor: User;
	title: string;
	id: string | undefined;
	onClick?: () => void;
}
const TutorAvailability: React.FC<Props> = ({ tutor, title, id, onClick }) => {
	const [available, setAvailable] = useState<Available>({
		availableTime: [],
		availableDate: "",
	});
	const [availabilities, setAvailabilities] = useState<any>([]);
	const [availabletime, setAvailabletime] = useState([]);
	const [activeSlotIndex, setActiveSlotIndex] = useState<number>(0);
	const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
	const [pickedTime, setPickedTime] = useState<string>("");
	const [pickedDateId, setPickedDateId] = useState<string>("");
	const [availableDates, setAvailableDates] = useState<Availability[]>([]);

	const [num, setNum] = useState(3);

	const userType = localStorage.getItem("userType");

	const getAvailable = async () => {
		if (id !== undefined) {
			try {
				const { data } = await apiGet(`/users/get-available-tutors/${id}`);
				console.log(data.availabilities);
				if (data.message) {
					toast.success(data.message);
				}

				const filteredDates = data?.availabilities?.filter(
					(available: Availability) => available.availableSlots > 0
				);
				setAvailableDates(filteredDates);
				setAvailabletime(filteredDates[0].availableTime);
				setAvailabilities(data.availabilities);
				setAvailable({
					availableTime: data.availabilities[0].availableTime,
					availableDate: data.availabilities[0].availableDate,
				});
				setPickedDateId(filteredDates[0].id);
				setPickedTime(filteredDates[0].availableTime[0]);
				console.log(filteredDates[0].availableTime);
			} catch (err: any) {
				console.error(err);
				toast.error(err.message);
			}
		}
	};

	function getMonthName(monthNumber: any) {
		const date = new Date();
		date.setMonth(monthNumber - 1);

		return date.toLocaleString("en-US", { month: "long" });
	}

	/// this change the selected date button state

	const handleDateClick = (date: any, index: number) => {
		setAvailabletime(date.availableTime);
		setActiveButtonIndex(index);
		setPickedDateId(date.id);
		console.log(availableDates.length);
	};

	// This change the selected time state
	const handleTimeClick = (timeslot: string, index: number) => {
		selectedTime.push(timeslot);
		setActiveSlotIndex(index);
		setPickedTime(timeslot);
		availabletime.filter((time) => time !== timeslot);
	};

	const handleBookSession = async (availabilityId: any, pickedTime: any) => {
		console.log(availabilityId, pickedTime);

		try {
			await apiPost("/users/book-session", {
				availabilityId,
				pickedTime,
			});
			void getAvailable();

			toast.success("session booked successfully");
			return null;
		} catch (err: any) {
			console.log(err);
			toast.error(err.message);
			return null;
		}
	};

	useEffect(() => {
		void getAvailable();
	}, [getAvailable, id]);

	const returnAvailibilty = () => {
		return availableDates
			.slice(0, num)
			.map((date: Availability, index: number) => (
				<button key={index} onClick={() => handleDateClick(date, index)}>
					<div
						key={index}
						className={
							`tutorAvailability-buttonContainer ` +
							(index === activeButtonIndex ? `button-active` : "")
						}
					>
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
			));
	};

	// function that set the time
	const setTime = (date: any, index: number) => {
		setAvailabletime(date.availableTime);
		console.log(`availButton${index}`);
	};

	const selectedTime: string[] = [];

	return (
		<>
			<ToastContainer />
			{available !== null && available.availableTime && (
				<div className="tutor-Availability-container">
					<div className="tutor-Availability-Info">
						<h3>Available Sessions</h3>
					</div>
					<hr />
					{availabilities && returnAvailibilty()}
					{availableDates.length > 3 && num === 3 ? (
						<>
							<button className="next-arrow" onClick={() => setNum(num + 30)}>
								Load More
							</button>
							<IoIosArrowForward />
						</>
					) : num > 6 && num <= 34 ? (
						<>
							<IoIosArrowBack />
							<button className="previous-arrow" onClick={() => setNum(3)}>
								See Less
							</button>
						</>
					) : (
						<></>
					)}

					<div>
						<h4>Available time slots</h4>
						<hr />
					</div>
					<div className="tutorAvailability-buttonContainer2">
						{availabletime.map((timeslot: any, index: number) => (
							<button
								key={index}
								onClick={() => handleTimeClick(timeslot, index)}
								className={index === activeSlotIndex ? ` button-active` : ""}
							>
								{timeslot}
							</button>
						))}
					</div>
					<div className="tutorAvailability-submitButton">
						{userType && userType === "Tutor" ? (
							<button onClick={onClick}>set Availability</button>
						) : (
							<button
								onClick={async () =>
									await handleBookSession(pickedDateId, pickedTime)
								}
							>
								{title}
							</button>
						)}
					</div>
				</div>
			)}
		</>
	);
};
export default TutorAvailability;
