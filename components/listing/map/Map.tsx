import React from "react";
import styles from "./Map.module.scss";
import Image from "next/image";

const Map = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h3>LOCATION</h3>
			</div>
			<div className={styles.image}>
				<Image src="/images/map.png" fill alt="" sizes="100vw" />
			</div>
			<div className={styles.text}>
				<p>2972 Westheimer Rd. Santa Ana, Lagos, Nigeria</p>
			</div>
		</div>
	);
};

export default Map;
