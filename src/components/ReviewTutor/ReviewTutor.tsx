import "./ReviewTutor.css";
import chem from "../../assets/chem.jpg";
import { useEffect, useState } from "react";
import { apiGet } from "../../utils/api/axios";

const ReviewTutor = () => {
	const [review, setReview] = useState([]);
	const getReview = async () => {
		try {
			const response = await apiGet(`/users/tutors/:id/review`);
			console.log("data is ", response.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		void getReview();
	});
	return (
		<div>
			<div className="tutor-review">
				<div className="tutor-review-block">
					<img src={chem} alt="" />
					<div className="tutor-review-write">
						<h3>StudentName</h3>
						<h3>rating star</h3>
					</div>
				</div>
				<p>
					Description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsa sapiente, harum, deserunt quo tempore pariatur ipsum minima,
					rerum esse sunt aut voluptatem et eius nemo explicabo non error. A,
					esse!
				</p>
			</div>

			<div className="tutor-review">
				<div className="tutor-review-block">
					<img src={chem} alt="" />
					<div className="tutor-review-write">
						<h3>StudentName</h3>
						<h3>rating star</h3>
					</div>
				</div>
				<p>
					Description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsa sapiente, harum, deserunt quo tempore pariatur ipsum minima,
					rerum esse sunt aut voluptatem et eius nemo explicabo non error. A,
					esse!
				</p>
			</div>

			<div className="tutor-review">
				<div className="tutor-review-block">
					<img src={chem} alt="" />
					<div className="tutor-review-write">
						<h3>StudentName</h3>
						<h3>rating star</h3>
					</div>
				</div>
				<p>
					Description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsa sapiente, harum, deserunt quo tempore pariatur ipsum minima,
					rerum esse sunt aut voluptatem et eius nemo explicabo non error. A,
					esse!
				</p>
			</div>

			<div className="tutor-review">
				<div className="tutor-review-block">
					<img src={chem} alt="" />
					<div className="tutor-review-write">
						<h3>StudentName</h3>
						<h3>rating star</h3>
					</div>
				</div>
				<p>
					Description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsa sapiente, harum, deserunt quo tempore pariatur ipsum minima,
					rerum esse sunt aut voluptatem et eius nemo explicabo non error. A,
					esse!
				</p>
			</div>
		</div>
	);
};

export default ReviewTutor;
