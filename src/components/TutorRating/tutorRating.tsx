import React, { useState } from "react";
import axios from "axios";

interface FormData {
	rating: number;
	comment: string;
}

interface StarProps {
	selected: boolean;
	onClick: () => void;
}

const Star: React.FC<StarProps> = ({ selected, onClick }) => {
	return <span onClick={onClick}>{selected ? "★" : "☆"}</span>;
};

const StarRating: React.FC<{ onClick: (rating: number) => void }> = ({
	onClick,
}) => {
	const [rating, setRating] = useState(0);

	const handleClick = (newRating: number) => {
		setRating(newRating);
		onClick(newRating);
	};

	return (
		<div>
			{[1, 2, 3, 4, 5].map((star) => {
				const selected = rating >= star;
				return (
					<Star
						key={star}
						selected={selected}
						onClick={() => handleClick(star)}
					/>
				);
			})}
		</div>
	);
};

const CommentForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		rating: 0,
		comment: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
		axios
			.post<FormData>("", formData)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};

	return (
		<form onSubmit={handleSubmit}>
			<StarRating onClick={(rating) => setFormData({ ...formData, rating })} />
			<textarea name="comment" onChange={handleChange} />
			<button type="submit">Submit</button>
		</form>
	);
};

export default CommentForm;

// import React, { useState } from "react";
// import axios from "axios";

// interface FormData {
// 	rating: number;
// 	comment: string;
// }

// interface StarProps {
// 	selected: boolean;
// 	onClick: () => void;
// }

// const Star: React.FC<StarProps> = ({ selected, onClick }) => {
// 	return <span onClick={onClick}>{selected ? "★" : "☆"}</span>;
// };

// const StarRating: React.FC = () => {
// 	const [rating, setRating] = useState(0);

// 	const handleClick = (newRating: number) => {
// 		setRating(newRating);
// 	};

// 	return (
// 		<div>
// 			{[1, 2, 3, 4, 5].map((star) => {
// 				const selected = rating >= star;
// 				return (
// 					<Star
// 						key={star}
// 						selected={selected}
// 						onClick={() => handleClick(star)}
// 					/>
// 				);
// 			})}
// 		</div>
// 	);
// };

// const CommentForm: React.FC = () => {
// 	const [formData, setFormData] = useState<FormData>({
// 		rating: 0,
// 		comment: "",
// 	});

// 	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// 		setFormData({ ...formData, [event.target.name]: event.target.value  });
// 	};

// 	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		console.log(formData);
// 		axios
// 			.post<FormData>("/api/submit-comment", formData)
// 			.then((response) => console.log(response))
// 			.catch((error) => console.log(error));
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<StarRating />
// 			<textarea name="comment" onChange={handleChange} />
// 			<button type="submit">Submit</button>
// 		</form>
// 	);
// };

// export default CommentForm;

// /* eslint-disable @typescript-eslint/no-misused-promises */
// import React, { useState } from "react";
// import NavBar from "../navBar/navBar";
// import { Link } from "react-router-dom";

// import { FaChevronLeft, FaRegEnvelope } from "react-icons/fa";
// import "./tutorRating.css";
// // import StarRating from "../StarRating/StarRating";

// import axios from "axios";

// const TutorRating = () => {
// 	const [rating, setRating] = useState(0);

// 	const handleRating = (newRating: number) => {
// 		setRating(newRating);
// 	};

// 	const handleSubmit = async () => {
// 		try {
// 			const res = await axios.post("http://your-endpoint.com/rate-tutor", {
// 				rating,
// 			});
// 			console.log(res);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	return (
// 		<>
// 			<NavBar />
// 			<div className="tutorContainer">
// 				<div className="lineup">
// 					<Link className="back" to="#">
// 						<p>
// 							{" "}
// 							<span id="icon">
// 								<FaChevronLeft />
// 							</span>
// 							&nbsp; Back
// 						</p>
// 					</Link>
// 					<h1 id="tutor">Rate Tutor</h1>
// 				</div>
// 				<hr />
// 				<div className="tutorCard">
// 					<div className="tutorDetails">
// 						<img
// 							src="https://avatars0.githubusercontent.com/u/810438?v=4"
// 							width={80}
// 							height={80}
// 							alt="Tutor Picture"
// 							id="imageAvatar"
// 						/>
// 						<div id="tutorName">
// 							<h3>Ogbonnaya Kingsley</h3>
// 							<p>
// 								<FaRegEnvelope />
// 								&nbsp; Kingsike@gmail.com
// 							</p>
// 						</div>
// 					</div>

// 					<div className="tutorForm">
// 						<h3>Rate Tutor</h3>
// 						{/* <StarRating /> */}
// 						{/* <h2>Stars</h2> */}

// 						<div className="star-rating">
// 							<Star selected={rating >= 1} onClick={() => handleRating(1)} />
// 							<Star selected={rating >= 2} onClick={() => handleRating(2)} />
// 							<Star selected={rating >= 3} onClick={() => handleRating(3)} />
// 							<Star selected={rating >= 4} onClick={() => handleRating(4)} />
// 							<Star selected={rating >= 5} onClick={() => handleRating(5)} />
// 						</div>
// 						<button type="submit" id="submit" onClick={handleSubmit}>
// 							Send
// 						</button>
// 						<div className="postTutor">
// 							<form action="" method="post">
// 								<div id="post">
// 									<label>Comments</label>
// 									<textarea
// 										rows={10}
// 										cols={50}
// 										defaultValue="Write your comment..."
// 									></textarea>
// 									<br />

// 									<button type="submit" id="submit">
// 										Send
// 									</button>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// const Star: React.FC<{ selected: boolean; onClick: () => void }> = ({
// 	selected,
// 	onClick,
// }) => (
// 	<div className={`star ${selected ? "selected" : ""}`} onClick={onClick}>
// 		&#9733;
// 	</div>
// );

// export default TutorRating;

// // const StarRating: React.FC = () => {
// // 	const [rating, setRating] = useState(0);

// // 	const handleRating = (newRating: number) => {
// // 		setRating(newRating);
// // 	};

// // 	const handleSubmit = async () => {
// // 		try {
// // 			const res = await axios.post("http://your-endpoint.com/rate-tutor", {
// // 				rating,
// // 			});
// // 			console.log(res);
// // 		} catch (error) {
// // 			console.log(error);
// // 		}
// // 	};

// // 	return (
// // 		<div>
// // 			<div className="star-rating">
// // 				<Star selected={rating >= 1} onClick={() => handleRating(1)} />
// // 				<Star selected={rating >= 2} onClick={() => handleRating(2)} />
// // 				<Star selected={rating >= 3} onClick={() => handleRating(3)} />
// // 				<Star selected={rating >= 4} onClick={() => handleRating(4)} />
// // 				<Star selected={rating >= 5} onClick={() => handleRating(5)} />
// // 			</div>
// // 			<button onClick={handleSubmit}>Submit</button>
// // 		</div>
// // 	);
// // };

// // const Star: React.FC<{ selected: boolean; onClick: () => void }> = ({
// // 	selected,
// // 	onClick,
// // }) => (
// // 	<div className={`star ${selected ? "selected" : ""}`} onClick={onClick}>
// // 		&#9733;
// // 	</div>
// // );

// // export default StarRating;
