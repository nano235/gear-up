"use client";

import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import styles from "./Rating.module.scss";

interface Props {
	readOnly?: boolean;
}

const Ratings = ({ readOnly = false }: Props) => {
	const [rating, setRating] = useState<number>(5);

	return (
		<div className={styles.container}>
			<Rating value={rating} onChange={setRating} readOnly={readOnly} />
		</div>
	);
};

export default Ratings;
