import React, { useState } from "react";
import "./StarRating.css";

interface StarProps {
	selected: boolean;
	onClick: () => void;
}

const Star: React.FC<StarProps> = ({ selected, onClick }) => {
	return (
		<span onClick={onClick} className={`star ${selected ? "selected" : ""}`}>
			{selected ? "★" : "☆"}
		</span>
	);
};

interface StarRatingProps {
	onClick: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onClick }) => {
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

export default StarRating;

// const StarRating = () => {
// 	const [rating, setRating] = useState<number>(0);
// 	const [hover, setHover] = useState<number>(0);
// 	return (
// 		<div className="star-rating">
// 			{[...Array(5)].map((star, index) => {
// 				index += 1;
// 				console.log(index);
// 				return (
// 					<button
// 						type="button"
// 						key={index}
// 						// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
// 						className={index <= ((rating && hover) || hover) ? "on" : "off"}
// 						onClick={() => setRating(index)}
// 						onMouseEnter={() => setHover(index)}
// 						onMouseLeave={() => setHover(rating)}
// 					>
// 						<span className="star">&#9733;</span>
// 					</button>
// 				);
// 			})}
// 		</div>
// 	);
// };
// export default StarRating;

// import React, { useState } from "react";
// import "./StarRating.css";

// interface StarProps {
// 	value: number;
// 	onClick: (value: number) => void;
// }

// const Star: React.FC<StarProps> = ({ value, onClick }) => {
// 	return (
// 		<span onClick={() => onClick(value)} className="star">
// 			{value === 0 ? "0.5" : value}
// 		</span>
// 	);
// };

// interface StarRatingProps {
// 	onClick: (rating: number) => void;
// }

// const StarRating: React.FC<StarRatingProps> = ({ onClick }) => {
// 	const [rating, setRating] = useState(0);

// 	const handleClick = (newRating: number) => {
// 		setRating(newRating);
// 		onClick(newRating);
// 	};

// 	return (
// 		<div>
// 			{[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((star) => (
// 				<Star key={star} value={star} onClick={handleClick} />
// 			))}
// 		</div>
// 	);
// };

// export default StarRating;
