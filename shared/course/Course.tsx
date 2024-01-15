import React from "react";
import styles from "./Course.module.scss";
import { Courses } from "@/interfaces";
import Image from "next/image";
import { Button, Ratings } from "..";

interface Props {
	props: Courses;
}

const Course = ({ props }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image src={props.image} alt={props.label} fill sizes="100vw" />
			</div>
			<div className={styles.text}>
				<h2>{props.label}</h2>
			</div>
			<div className={styles.small_row}>
				<div className={styles.text}>
					<h4>4.54</h4>
				</div>
				<Ratings readOnly />
				<div className={styles.text}>
					<span>({props.reviews} reviews)</span>
				</div>
			</div>
			<div className={styles.text}>
				<h3>${props.price}</h3>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.row}>
				<div className={styles.small_row}>
					<div className={styles.avatar}>
						<Image src={props.avatar} alt={props.user} fill sizes="100vw" />
					</div>
					<div className={styles.text} style={{ marginBottom: 0 }}>
						<p>{props.user}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
