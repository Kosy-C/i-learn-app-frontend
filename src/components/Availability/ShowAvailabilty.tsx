/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect } from "react";
import { apiGet, apiPost } from "../../utils/api/axios";
import "./show.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Available {
	availableTime: string[];
	availableDate: string;
}

const TutorAvailability = () => {
	const [available, setAvailable] = useState<Available>({
		availableTime: [],
		availableDate: "",
	});
	const color = {
		border: "none",
	};
	const [availabilities, setAvailabilities] = useState<any>([]);
	const [availabletime, setAvailabletime] = useState([]);
	const [activeSlotIndex, setActiveSlotIndex] = useState<number>(0);
	const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

	const [num, setNum] = useState(3);

	function getMonthName(monthNumber: any) {
		const date = new Date();
		date.setMonth(monthNumber - 1);

		return date.toLocaleString("en-US", { month: "long" });
	}

	/// this change the selected date button state

	const handleDateClick = (date: any, index: number) => {
		setAvailabletime(date.availableTime);
		setActiveButtonIndex(index);
	};

	// This change the selected time state
	const handleTimeClick = (timeslot: any, index: number) => {
		selectedTime.push(timeslot);
		setActiveSlotIndex(index);
	};

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
	}, [params.id]);

	// function that set the time
	const setTime = (date: any, index: number) => {
		setAvailabletime(date.availableTime);
		// setButtonActive(!buttonActive);
		// if (index === buttonIndex) {
		// }
		console.log(`availButton${index}`);
	};

	const selectedTime: string[] = [];

	const handleBookSession = async () => {
		const { data } = await apiPost(
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			`/${selectedTime[0]}/${params.id}/${availabilities[0].userId}`
		);

		// router.post("/scheduled-time/:tutorId/:studentId")
		// );
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
					{availabilities &&
						availabilities.slice(0, num).map((date: any, index: number) => (
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
						))}
					{num === 3 ? (
						<>
							<button className="next-arrow" onClick={() => setNum(num + 30)}>
								Load More
							</button>
							<IoIosArrowForward />
						</>
					) : (
						<>
							<IoIosArrowBack />
							<button className="previous-arrow" onClick={() => setNum(3)}>
								See Less
							</button>
						</>
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
