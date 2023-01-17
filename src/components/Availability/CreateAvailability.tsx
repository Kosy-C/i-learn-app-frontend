/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiPost } from "../../utils/api/axios";
import moment from "moment";
import "./avail.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAvailability = () => {
	const [availableDate, setAvailableDate] = useState<string>("");
	const [availableTime, setAvailableTime] = useState<string[]>([]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			const data = { availableDate, availableTime };
			const date = moment(availableDate, "YYYY-MM-DD");
			if (date.isValid()) {
				data.availableDate = date.toISOString();
				const response = await apiPost("/users/tutors/availablity", data);

				toast.success(response.data.message);
			} else {
				toast.error("Invalid date format, please use format YYYY-MM-DD");
			}
		} catch (err: any) {
			toast.error(err.response.data.message);
		}
	};

	return (
		<>
			<div className="availa_container">
				<form onSubmit={handleSubmit}>
					Available Dates:
					{/* <input
					placeholder="YYYY-MM-DD"
					type="text"
					value={availableDate}
					onChange={(event) => setAvailableDate(event.target.value)}
				/> */}
					<DatePicker
						value={availableDate}
						onChange={(date: Date | null) => {
							if (date != null) {
								const dateString = date.toISOString().slice(0, 10);
								setAvailableDate(dateString);
							}
						}}
						dateFormat="dd/MM/yyyy"
					/>
					<br />
					<label>
						Available Times:
						<br />
						<select
							multiple
							value={availableTime}
							onChange={(event) =>
								setAvailableTime(
									Array.from(
										event.target.selectedOptions,
										(item: any) => item.value
									)
								)
							}
						>
							<option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
							<option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
							<option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
							<option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
							<option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
							<option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
							<option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
							<option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
						</select>
					</label>
					<br />
					<button className="avail-btn" type="submit">
						Create Availability
					</button>
				</form>
			</div>
		</>
	);
};

export default CreateAvailability;
