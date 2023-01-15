import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../utils/api/axios";
import StarRating from "../../components/StarRating/StarRating";
import "./RatingTutor.css";
import NavBar from "../../components/navBar/navBar";
import { Link, useParams } from "react-router-dom";

import { FaChevronLeft, FaRegEnvelope } from "react-icons/fa";

interface FormData {
	ratingValue: number;
	description: string;
}

const Card: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		ratingValue: 0,
		description: "",
	});

	const [tutorDetails, setTutorDetails] = useState<any>({});

	const params = useParams();

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// console.log(formData);
		const postComment = async () => {
			console.log(formData);
			await apiPost(`/users/tutors/${params.id}/rate`, formData);
		};
		postComment();
		window.location.reload();
	};

	useEffect(() => {
		const fetch = async () => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			try {
				const response = await apiGet(`/users/atutordetail/${params.id}`);
				// console.log(response.data);
				setTutorDetails(response.data.message);
			} catch (error) {
				console.log(error);
			}
		};
		void fetch();
	}, []);

	const handleStarRatingClick = (rating: number) => {
		setFormData({ ...formData, ratingValue: rating });
	};

	return (
		<>
			<NavBar />
			<div className="tutorContainer">
				<div className="lineup">
					<Link className="back" to="#">
						<p>
							{" "}
							<span id="icon">
								<FaChevronLeft />
							</span>
							&nbsp; Back
						</p>
					</Link>
					<h1 id="tutor">Rate Tutor</h1>
				</div>
				<hr />
				<div className="card">
					<div className="card-content">
						<img
							src={tutorDetails.image}
							width={80}
							height={80}
							alt="Tutor Picture"
							id="imageAvatar"
						/>
						<div id="tutorName">
							<h3>{tutorDetails.name}</h3>
							<p>
								<FaRegEnvelope />
								&nbsp;{tutorDetails.email}
							</p>
						</div>
					</div>
					<div className="card-footer">
						<form onSubmit={handleSubmit}>
							<StarRating onClick={handleStarRatingClick} />
							<label id="page">Comment</label>
							<textarea
								name="description"
								rows={10}
								cols={60}
								onChange={handleChange}
							/>
							<div className="submit-container">
								<button type="submit" className="submit-button">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default Card;
