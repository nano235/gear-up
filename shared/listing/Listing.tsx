import React from "react";
import styles from "./Listing.module.scss";
import { Listings } from "@/interfaces";
import Image from "next/image";
import { Button } from "..";

interface Props {
	props: Listings;
}

const Listing = ({ props }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image src={props.image} alt={props.label} fill sizes="100vw" />
				<Button className={styles.button}>{props.type}</Button>
			</div>
			<div className={styles.row} style={{ alignItems: "flex-start" }}>
				<div className={styles.text}>
					<h2>{props.label}</h2>
					<h3>
						${props.price}
						<span>{props.type === "rent" && "/Day"}</span>
					</h3>
				</div>
				<div className={styles.chevron}>
					<Image src="/svgs/chevron-yellow.svg" alt="" fill sizes="100vw" />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.small_row}>
					<div className={styles.avatar}>
						<Image src={props.avatar} alt={props.user} fill sizes="100vw" />
					</div>
					<div className={styles.text} style={{ marginBottom: 0 }}>
						<p>{props.user}</p>
					</div>
					<div className={styles.verified}>
						<Image src="/svgs/icon-verify.svg" alt="" fill sizes="100vw" />
					</div>
				</div>
				<div className={styles.small_row}>
					<div className={styles.verified}>
						<Image
							src={`/svgs/icon-${
								props.reviews ? "filled-star" : "star"
							}.svg`}
							alt=""
							fill
							sizes="100vw"
						/>
					</div>
					<div className={styles.text} style={{ marginBottom: 0 }}>
						<span>({props.reviews})</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Listing;
