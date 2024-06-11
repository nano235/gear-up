import React from "react";
import styles from "./SpecCard.module.scss";
import { DetailContainer } from "@/shared";

const SpecCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.text}>
				<h3>SPECIFICATIONS</h3>
			</div>
			<DetailContainer title="Category:" value="Lenses" />
			<DetailContainer title="Production type:" value="Still and video" />
			<DetailContainer title="Sensor size:" value="APS-C (Super 35 mm)" />
			<DetailContainer title="Focal length:" value="14mm" />
			<div className={styles.divider}></div>
			<DetailContainer title="Sub category:" value="Prime" />
			<DetailContainer title="Brand:" value="Samsung" />
			<DetailContainer title="Focal type:" value="Auto" />
			<DetailContainer title="Image stabilization:" value="Yes" />
			<DetailContainer
				title="Use cases:"
				value="Cinematography, Live streaming, Interviews, documentary"
			/>
		</div>
	);
};

export default SpecCard;
