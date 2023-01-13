import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
	const [rating, setRating] = useState<number>(0);
	const [hover, setHover] = useState<number>(0);
	return (
		<div className="star-rating">
			{[...Array(5)].map((star, index) => {
				index += 1;
				console.log(index);
				return (
					<button
						type="button"
						key={index}
						// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
						className={index <= ((rating && hover) || hover) ? "on" : "off"}
						onClick={() => setRating(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<span className="star">&#9733;</span>
					</button>
				);
			})}
		</div>
	);
};
export default StarRating;
