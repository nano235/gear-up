import React from "react";
import styles from "./ListingType.module.scss";
import Image from "next/image";

interface Props {
	src?: string;
	title: string;
	toggle: (e: string) => void;
	checked: boolean;
}

const ListingType = ({ src, title, toggle, checked }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.small_row}>
				{!!src && (
					<div className={styles.icon}>
						<Image src={src} alt="" fill sizes="100vw" />
					</div>
				)}
				<div className={styles.text}>
					<p>For {title}</p>
				</div>
			</div>
			<label className={styles.switch}>
				<input type="checkbox" onChange={() => toggle(title)} checked={checked} />
				<span className={styles.slider}></span>
			</label>
		</div>
	);
};

export default ListingType;
