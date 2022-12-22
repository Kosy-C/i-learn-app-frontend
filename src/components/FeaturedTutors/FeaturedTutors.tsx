import React from "react";
import { tutorsData } from "../data/tutorsData";
import "./FeaturedTutors.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props = {};

const FeaturedTutors = (props: Props) => {
	return (
		<>
			<div className="all_container">
				<div className="tutors-bar">
					<h4>Featured Tutors</h4>
					<p>
						<Link to="/" className="see-all-tutors">
							See all
						</Link>
					</p>
				</div>

				<div className="tutor-details">
					{tutorsData.map((el: any) => {
						return (
							<div key={el.id} className="img-name">
								<div className="images">
									<img src={el.img} alt="" width="68px" height="68px" />
								</div>

								<p className="names">{el.name}</p>
								<p className="ratings">{el.rating}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default FeaturedTutors;
