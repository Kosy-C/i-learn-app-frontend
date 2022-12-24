import React, { useEffect, useState } from "react";
import "./FeaturedTutors.css";
import { Link } from "react-router-dom";
import { apiGet } from "../../utils/api/axios";

const FeaturedTutors = () => {
	const [tutors, setTutors] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			try {
				const response = await apiGet(`/users/feature-tutors?page=0&limit=10`);
				setTutors(response.data.tutorSorted);
			} catch (error) {
				console.log(error);
			}
		};
		void fetch();
	}, []);
	return (
		<>
			<div className="all_container">
				<div className="tutors-bar">
					<h4>Featured Tutors</h4>
					<p>
						<Link to="/all-tutors" className="see-all-tutors">
							See all
						</Link>
					</p>
				</div>

				<div className="tutor-details">
					{tutors.map((el: any) => {
						return (
							<div key={el.id} className="img-name">
								<div className="images">
									<img src={el.image} alt="" width="68px" height="68px" />
								</div>

								<p className="names">{el.name}</p>
								<p className="ratings">⭐ {el.rating}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default FeaturedTutors;
