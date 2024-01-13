import Image from "next/image";
import React from "react";
import styles from "./Icon.module.scss";

interface Props {
	src?: string;
	className?: string;
	title?: string;
}

const Icon = ({ src, className, title = "" }: Props) => {
	return (
		<>
			{src ? (
				<div className={`${styles.icon} ${className && className}`}>
					<Image src={src} alt={title} title={title} layout="fill" />
				</div>
			) : (
				<div className={`${styles.container} ${className && className}`}>
					<div
						className={`${!src && styles.icon_not} ${className && className}`}
					>
						<Image
							src={"/images/unknown.png"}
							alt={title}
							title={title}
							layout="fill"
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default Icon;
