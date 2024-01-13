import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.text}>
				<h1>The Marketplace For African Creators to Rent, Buy & Sell Gears</h1>
				<p>
					Rent, buy, or sell gears with ease within your country. Our secure
					escrow system ensures worry-free transactions
				</p>
			</div>
			<div className={styles.hero_image_container}>
				<div className={styles.hero_image}>
					<Image src="/images/camera.png" alt="hero" fill sizes="100vw" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
