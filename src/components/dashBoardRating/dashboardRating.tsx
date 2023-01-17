/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";

interface RatingProps {
	onRating: (rate: any) => void;
	rating: number;
}

fontawesome.library.add(faStar);

const Rating = (props: RatingProps) => {
	const { rating, onRating } = props;
	const [hoverRating, setHoverRating] = useState(0);

	const color = {
		filled: "#f5eb3b",
		unfilled: "#DCDCDC",
	};

	const count = 5;

	const getColor = (index: number) => {
		if (hoverRating >= index) {
			return color.filled;
		} else if (!hoverRating && rating >= index) {
			return color.filled;
		}

		return color.unfilled;
	};

	const starRating = useMemo(() => {
		return Array(count)
			.fill(0)
			.map((_, i) => i + 1)
			.map((idx) => (
				<FontAwesomeIcon
					key={idx}
					className="cursor-pointer"
					icon="star"
					onClick={() => onRating(idx)}
					style={{ color: getColor(idx) }}
					onMouseEnter={() => setHoverRating(idx)}
					onMouseLeave={() => setHoverRating(0)}
				/>
			));
	}, [count, rating, hoverRating]);

	console.log(starRating);

	return <div>{starRating}</div>;
};

export default Rating;